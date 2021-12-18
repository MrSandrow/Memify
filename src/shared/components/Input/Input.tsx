import React, { FC } from 'react';

import Icon from '../Icon/Icon';
import { Wrapper, StyledInput } from './Styles';

interface Props {
  placeholder: string;
  type: string;
}

const Input:FC<Props> = ({ placeholder, type }) => (
  <Wrapper>
    <Icon variant="search" size="1.2em" />
    <StyledInput placeholder={placeholder} type={type} />
  </Wrapper>
);

export default Input;
