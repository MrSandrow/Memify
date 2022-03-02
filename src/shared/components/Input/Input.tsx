import React, { FC, InputHTMLAttributes, ChangeEventHandler } from 'react';

import icons from 'shared/utils/icons';

import Icon from 'shared/components/Icon/Icon';

import { Wrapper, StyledInput } from './Styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: keyof typeof icons;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Input:FC<Props> = ({
  icon,
  onChange,
  value,
  ...inputProps
}) => (
  <Wrapper>
    {icon && <Icon size="1.25em" variant={icon} /> }
    <StyledInput {...inputProps} onChange={onChange} value={value} />
  </Wrapper>
);

export default Input;
