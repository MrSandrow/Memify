import React, { FC } from 'react';

import { Wrapper, StyledTooltip } from './Styles';

const Tooltip:FC = ({ children }) => (
  <Wrapper>
    <StyledTooltip>
      {children}
    </StyledTooltip>
  </Wrapper>
);

export default Tooltip;
