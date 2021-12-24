import React, { FC } from 'react';

import StyledSpan from './Styles';

interface Props {
  size: string;
}

const Logo:FC<Props> = ({ size }) => (
  <StyledSpan size={size}>
    memify
  </StyledSpan>
);

export default Logo;
