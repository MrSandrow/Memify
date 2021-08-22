import React, { FC, MouseEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  font-size: max(1.3rem, calc(100vh / 35));
  gap: 1em;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.span`
  color: white;
  font-size: 1.4em;
  font-weight: bold;
`;

const ButtonsContainer = styled.div`
  display: grid;
  gap: 0.75em;
  grid-template-columns: repeat(3, 1fr);
`;

interface ButtonProps {
  background: string;
  isActive: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${(props) => props.background};
  border-radius: 50%;
  font-size: 0.9em;
  height: 3em;
  position: relative;
  width: 3em;

  &::before {
    border: ${(props) => props.isActive && '0.3em solid #292929'};
    border-radius: 50%;
    content: "";
    height: 80%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
  }
`;

interface Props {
  penColor: string;
  setPenColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorSelector:FC<Props> = (props) => {
  const { penColor, setPenColor } = props;

  const handleClick = (event: MouseEvent) => {
    const clickedButton = event.target;
    if (!(clickedButton instanceof HTMLButtonElement)) return;

    const buttonColor = clickedButton.dataset['color'];
    if (!buttonColor) return;

    setPenColor(buttonColor);
  };

  const colors = ['#0088ff', '#ffae00', '#199c40', '#ff0000', '#000000', '#ffffff'];

  return (
    <Container>
      <Title>Color</Title>
      <ButtonsContainer onClick={handleClick}>
        {colors.map((color) => (
          <Button
            key={color}
            data-color={color}
            background={color}
            isActive={color === penColor}
          />
        ))}
      </ButtonsContainer>
    </Container>
  );
};

export default ColorSelector;
