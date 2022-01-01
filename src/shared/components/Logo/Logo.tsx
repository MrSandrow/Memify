import React, { FC } from 'react';

import { Wrapper, StyledSpan } from './Styles';

interface Props {
  size: string;
}

const Logo:FC<Props> = ({ size }) => (
  <Wrapper>
    <StyledSpan size={size}>
      memify
    </StyledSpan>
  </Wrapper>
);

export default Logo;
