import React, { FC } from 'react';

import StyledButton from './Styles';

interface Props {
  variant: 'primary' | 'secondary' | 'danger' | 'empty';
}

const Button:FC<Props> = ({ children, variant }) => (
  <StyledButton variant={variant}>
    {children}
  </StyledButton>
);

export default Button;
