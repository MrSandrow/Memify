import React, {
  FC,
  InputHTMLAttributes,
  ChangeEventHandler,
  ComponentProps,
} from 'react';

import Icon from 'shared/components/Icon/Icon';

import { Wrapper, StyledInput } from './Styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentProps<typeof Icon>['variant'];
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
