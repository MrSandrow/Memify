import styled, { css } from 'styled-components';

import { color, mixin } from '../../utils/styles';

const getColoredButton = (colorValue: string) => css`
  background: ${colorValue};

  &:hover {
    background: ${mixin.lighten(colorValue, 0.3)};
  }
`;

const getEmptyButton = (colorValue: string) => css`
  background: none;

  &:hover {
    background: ${colorValue};
  }
`;

const buttonVariants = {
  primary: getColoredButton(color.buttonPrimary),
  secondary: getColoredButton(color.buttonSecondary),
  danger: getColoredButton(color.buttonDanger),
  empty: getEmptyButton(color.backgroundLight),
};

interface StyledButtonProps {
  variant: keyof typeof buttonVariants;
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  border: none;
  border-radius: 0.5em;
  color: inherit;
  cursor: pointer;
  display: inline-grid;
  font-family: inherit;
  font-size: 1em;
  gap: 0.75em;
  grid-auto-flow: column;
  height: 3em;
  line-height: 1;
  margin: auto;
  padding: 0 0.75em;
  overflow: hidden;
  transition: all 0.1s;
  user-select: none;
  ${(props) => buttonVariants[props.variant]}
`;

export default StyledButton;
