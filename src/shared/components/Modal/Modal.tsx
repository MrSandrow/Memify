import React, { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { Wrapper, Overlay, StyledModal } from './Styles';

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
      <Wrapper>
        <Overlay>
          <StyledModal width={width}>
            {renderContent(closingFunction)}
          </StyledModal>
        </Overlay>
      </Wrapper>,
      root,
    ) : (
      null
    )
  );
};

export default Modal;
