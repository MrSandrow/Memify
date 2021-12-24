import React, { FC, ReactElement, InputHTMLAttributes } from 'react';

import { Wrapper, StyledInput } from './Styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  renderIcon?: (size: string) => ReactElement;
}

const Input:FC<Props> = ({ renderIcon, ...inputProps }) => (
  <Wrapper>
    {renderIcon && renderIcon('1.25em')}
    <StyledInput {...inputProps} />
  </Wrapper>
);

export default Input;
