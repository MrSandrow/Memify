import React, { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { ScrollWrapper, Overlay, StyledModal } from './Styles';

interface Props {
  closingFunction: () => void;
  isOpen: boolean;
  renderContent: (closingFunction: () => void) => ReactElement;
  width: string;
}

const Modal:FC<Props> = ({
  closingFunction,
  isOpen,
  renderContent,
  width,
}) => {
  const root = document.getElementById('root');
  if (!root) return null;

  return (
    isOpen ? createPortal(
      <ScrollWrapper>
        <Overlay>
          <StyledModal width={width}>
            {renderContent(closingFunction)}
          </StyledModal>
        </Overlay>
      </ScrollWrapper>,
      root,
    ) : (
      null
    )
  );
};

export default Modal;
