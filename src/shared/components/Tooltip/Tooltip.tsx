import React, { FC, ReactElement } from 'react';

import { RelativeWrapper, AbsoluteWrapper, StyledTooltip } from './Styles';

interface Props {
  closingFunction: () => void;
  renderContent: (closingFunction: () => void) => ReactElement;
}

const Tooltip:FC<Props> = ({ closingFunction, renderContent }) => (
  <RelativeWrapper>
    <AbsoluteWrapper>
      <StyledTooltip>
        {renderContent(closingFunction)}
      </StyledTooltip>
    </AbsoluteWrapper>
  </RelativeWrapper>
);

export default Tooltip;
