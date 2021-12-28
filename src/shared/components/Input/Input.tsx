import React, { FC, InputHTMLAttributes } from 'react';

import icons from 'shared/services/icons';

import Icon from 'shared/components/Icon/Icon';

import { Wrapper, StyledInput } from './Styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof icons;
}

const Input:FC<Props> = ({ icon, ...inputProps }) => (
  <Wrapper>
    {icon && <Icon size="1.25em" variant={icon} /> }
    <StyledInput {...inputProps} />
  </Wrapper>
);

export default Input;
