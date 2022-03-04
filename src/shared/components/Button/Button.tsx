import React, { FC, ButtonHTMLAttributes, ComponentProps } from 'react';

import Icon from 'shared/components/Icon/Icon';

import buttonVariants from './buttonVariants';

import { StyledButton, Wrapper } from './Styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: ComponentProps<typeof Icon>['variant'];
  variant: keyof typeof buttonVariants;
}

const Button:FC<Props> = ({
  children,
  icon,
  variant,
  ...buttonProps
}) => (
  <StyledButton
    {...buttonProps}
    iconOnly={!children}
    variant={variant}
  >
    <Wrapper>
      {icon && <Icon size="1.5em" variant={icon} /> }
      {children}
    </Wrapper>
  </StyledButton>
);

export default Button;
