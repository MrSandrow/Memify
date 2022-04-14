import React, { FC } from 'react';

import Wrapper from './Styles';

const Tooltip:FC = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Tooltip;
