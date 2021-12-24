import React, { FC, ReactElement, ButtonHTMLAttributes } from 'react';

import buttonVariants from 'shared/services/buttonVariants';

import StyledButton from './Styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  renderIcon?: (size: string) => ReactElement;
  variant: keyof typeof buttonVariants;
}

const Button:FC<Props> = ({
  children,
  renderIcon,
  variant,
  ...buttonProps
}) => (
  <StyledButton variant={variant} {...buttonProps}>
    {renderIcon && renderIcon('1.5em')}
    {children}
  </StyledButton>
);

export default Button;
