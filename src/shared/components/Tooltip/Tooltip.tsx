import React, { FC, ReactElement } from 'react';

import { Wrapper, StyledTooltip } from './Styles';

interface Props {
  closingFunction: () => void;
  renderContent: (closingFunction: () => void) => ReactElement;
}

const Tooltip:FC<Props> = ({ closingFunction, renderContent }) => (
  <Wrapper>
    <StyledTooltip>
      {renderContent(closingFunction)}
    </StyledTooltip>
  </Wrapper>
);

export default Tooltip;
