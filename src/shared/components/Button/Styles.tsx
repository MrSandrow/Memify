import styled from 'styled-components';

import buttonVariants from 'shared/services/buttonVariants';

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
  min-width: 3em;
  padding: 0 0.75em;
  overflow: hidden;
  transition: all 0.1s;
  user-select: none;
  ${(props) => buttonVariants[props.variant]}
`;

export default StyledButton;
