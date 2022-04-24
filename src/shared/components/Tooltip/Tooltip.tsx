import React, { FC, useEffect } from 'react';

import { RelativeWrapper, AbsoluteWrapper, StyledTooltip } from './Styles';

interface Props {
  closingFunction: () => void;
}

const Tooltip:FC<Props> = ({ closingFunction, children }) => {
  useEffect(() => {
    /* This might update the state of another component after it has been unmounted, thus triggering
    an error message saying that there is a memory leak, but I am pretty sure there is none. */
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
