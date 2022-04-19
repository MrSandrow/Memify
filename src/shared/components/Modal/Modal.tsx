import React, { FC, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { ScrollWrapper, Overlay, StyledModal } from './Styles';

interface BasicProps {
  closingFunction?: undefined;
  renderContent: () => ReactElement;
  width: string;
}

interface AdvancedProps {
  closingFunction: () => void;
  renderContent: (closingFunction: () => void) => ReactElement;
  width: string;
}

const Modal:FC<AdvancedProps | BasicProps> = ({
  closingFunction,
  renderContent,
  width,
}) => {
  const root = document.getElementById('root');
  if (!root) return null;

  return createPortal(
    <ScrollWrapper>
      <Overlay>
        <StyledModal width={width}>
          {closingFunction ? renderContent(closingFunction) : renderContent()}
        </StyledModal>
      </Overlay>
    </ScrollWrapper>,
    root,
  );
};

export default Modal;
