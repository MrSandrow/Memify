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
  isActive: boolean;
}

const Button = styled.button<ButtonProps>`
  background: white;
  border-radius: 50%;
  color: black;
  font-size: 0.9em;
  font-weight: bold;
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
  penThickness: number;
  setPenThickness: React.Dispatch<React.SetStateAction<number>>;
}

const ThicknessSelector:FC<Props> = (props) => {
  const { penThickness, setPenThickness } = props;

  const handleClick = (event: MouseEvent) => {
    const clickedButton = event.target;
    if (!(clickedButton instanceof HTMLButtonElement)) return;

    const buttonThickness = clickedButton.dataset['thickness'];
    if (!buttonThickness) return;

    setPenThickness(Number(buttonThickness));
  };

  const thicknesses = [{ S: 2 }, { M: 5 }, { L: 10 }];

  return (
    <Container>
      <Title>Thickness</Title>
      <ButtonsContainer onClick={handleClick}>
        {thicknesses.map((thickness) => {
          const [thicknessKey, thicknessValue] = Object.entries(thickness)[0];

          return (
            <Button
              key={thicknessKey}
              data-thickness={thicknessValue}
              isActive={thicknessValue === penThickness}
            >
              {thicknessKey}
            </Button>
          );
        })}
      </ButtonsContainer>
    </Container>
  );
};

export default ThicknessSelector;
