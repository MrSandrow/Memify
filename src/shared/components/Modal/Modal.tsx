import React, {
  FC,
  useRef,
  MouseEvent,
  ReactElement,
} from 'react';
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
  const modalRef = useRef(null);

  const root = document.getElementById('root');
  if (!root) return null;

  return createPortal(
    <ScrollWrapper>
      <Overlay onClick={handleOutsideClick}>
        <StyledModal ref={modalRef} width={width}>
          {closingFunction ? renderContent(closingFunction) : renderContent()}
        </StyledModal>
      </Overlay>
    </ScrollWrapper>,
    root,
  );

  function handleOutsideClick({ nativeEvent }: MouseEvent) {
    if (!closingFunction) return;

    const modalElement = modalRef.current;
    const isClickInsideModal = modalElement && nativeEvent.composedPath().includes(modalElement);
    if (isClickInsideModal) return;

    closingFunction();
  }
};

export default Modal;
