import React, { FC, useEffect } from 'react';

import { RelativeWrapper, AbsoluteWrapper, StyledTooltip } from './Styles';

interface Props {
  closingFunction: () => void;
}

const Tooltip:FC<Props> = ({ closingFunction, children }) => {
  useEffect(() => {
    /* This is creating a memory leak. I might fix it someday. */
    document.addEventListener('click', closingFunction);
    return () => document.removeEventListener('click', closingFunction);
  }, []);

  return (
    <RelativeWrapper>
      <AbsoluteWrapper>
        <StyledTooltip>
          {children}
        </StyledTooltip>
      </AbsoluteWrapper>
    </RelativeWrapper>
  );
};

export default Tooltip;
