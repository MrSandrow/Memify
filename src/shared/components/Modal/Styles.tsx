import styled from 'styled-components';

import { borderRadiusValues, color, zIndexValues } from 'shared/utils/styles';

export const ScrollWrapper = styled.div`
  height: 100%;
  left: 0;
  overflow-y: auto;
  position: absolute;
  top: 0;
  width: 100%;
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
  border-radius: ${borderRadiusValues.primary};
  margin: 5em 0;
  max-width: ${(props) => props.width};
  padding: 2em;
  width: 85%;
`;
