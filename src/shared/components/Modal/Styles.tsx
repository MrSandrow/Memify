import styled from 'styled-components';

import { color, zIndexValues } from 'shared/utils/styles';
import ScrollWrapper from 'shared/components/ScrollWrapper/ScrollWrapper';

export const StyledScrollWrapper = styled(ScrollWrapper)`
  z-index: ${zIndexValues.modal};
`;

export const Overlay = styled.div`
  align-items: center;
  background: #000000c3;
  display: flex;
  height: auto;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

interface StyledModalProps {
  width: string;
}

export const StyledModal = styled.div<StyledModalProps>`
  background: ${color.backgroundSecondary};
  border-radius: 0.5em;
  margin: 5em 0;
  max-width: ${(props) => props.width};
  padding: 2em;
  width: 85%;
`;
