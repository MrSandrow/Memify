import styled from 'styled-components';

import { color, zIndexValues } from 'shared/utils/styles';

export const Wrapper = styled.div`
  max-width: 100%;
  position: absolute;
  right: 0;
  z-index: ${zIndexValues.tooltip};

  /* This is a dirty trick to add a bottom margin to the element.
  The margin-bottom property doesn't work because the element is absolutely positioned. */
  &::after {
    bottom: -2.5em;
    content: '';
    height: 2.5em;
    position: absolute;
    right: 0;
    width: 100%;
  }
`;

export const StyledTooltip = styled.div`
  background: ${color.backgroundSecondary};
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
