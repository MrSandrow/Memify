import React, { FC, ButtonHTMLAttributes } from 'react';

import buttonVariants from 'shared/utils/buttonVariants';
import icons from 'shared/utils/icons';

import Icon from 'shared/components/Icon/Icon';

import { StyledButton, Wrapper } from './Styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: keyof typeof icons;
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
