import styled from 'styled-components';

import { borderRadiusValues } from 'shared/utils/styles';

import buttonVariants from './buttonVariants';

interface StyledButtonProps {
  iconOnly: boolean;
  variant: keyof typeof buttonVariants;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: ${borderRadiusValues.primary};
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  height: 3em;
  min-width: 3em;
  overflow: hidden;
  transition: all 0.1s;
  user-select: none;
  white-space: nowrap;
  width: ${(props) => (props.iconOnly ? '3em' : '100%')};
  ${(props) => buttonVariants[props.variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: inline-grid;
  gap: 0.75em;
  grid-auto-flow: column;
  height: 100%;
  line-height: 1;
  padding: 0 0.75em;
`;
