import React, { FC, ButtonHTMLAttributes } from 'react';

import buttonVariants from 'shared/services/buttonVariants';
import icons from 'shared/services/icons';

import Icon from 'shared/components/Icon/Icon';

import { StyledButton, Wrapper } from './Styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: keyof typeof icons;
  isNotImplemented?: boolean;
  variant: keyof typeof buttonVariants;
}

const Button:FC<Props> = ({
  children,
  icon,
  isNotImplemented,
  variant,
  ...buttonProps
}) => (
  <StyledButton
    {...buttonProps}
    iconOnly={!children}
    isNotImplemented={isNotImplemented}
    variant={variant}
  >
    <Wrapper>
      {icon && <Icon size="1.5em" variant={icon} /> }
      {children}
    </Wrapper>
  </StyledButton>
);

export default Button;
