import React, { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { StyledScrollWrapper, Overlay, StyledModal } from './Styles';

interface Props {
  closingFunction: () => void;
  renderContent: (closingFunction: () => void) => ReactElement;
  width: string;
}

const Modal:FC<Props> = ({
  closingFunction,
  renderContent,
  width,
}) => {
  const root = document.getElementById('root');
  if (!root) return null;

  return createPortal(
    <StyledScrollWrapper>
      <Overlay>
        <StyledModal width={width}>
          {renderContent(closingFunction)}
        </StyledModal>
      </Overlay>
    </StyledScrollWrapper>,
    root,
  );
};

export default Modal;
