import styled from 'styled-components';

import buttonVariants from 'shared/services/buttonVariants';

interface StyledButtonProps {
  iconOnly: boolean;
  variant: keyof typeof buttonVariants;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 0.5em;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  height: 3em;
  max-width: 25em;
  min-width: 3em;
  overflow: hidden;
  transition: all 0.1s;
  user-select: none;
  white-space: nowrap;
  width: ${(props) => (props.iconOnly ? '3em' : '100%')};
  ${(props) => buttonVariants[props.variant]}
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
