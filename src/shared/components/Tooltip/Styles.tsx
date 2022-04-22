import styled from 'styled-components';

import { borderRadiusValues, color, zIndexValues } from 'shared/utils/styles';

export const RelativeWrapper = styled.div`
  position: relative;
`;

export const AbsoluteWrapper = styled.div`
  max-width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${zIndexValues.tooltip};
`;

export const StyledTooltip = styled.div`
  background: ${color.backgroundSecondary};
  border-radius: ${borderRadiusValues.primary};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* This is a dirty trick to add a bottom margin to the element.
  The margin-bottom property doesn't work because the user cannot click through a margin. */
  &::after {
    bottom: -2.5em;
    content: '';
    height: 2.5em;
    pointer-events: none;
    position: absolute;
    width: 100%;
  }
`;
