import React, {
  FC,
  useRef,
  useEffect,
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
  useEffect(() => {
    /* This is creating a memory leak. I might fix it someday. */
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);

    function handleKeyDown(event: KeyboardEvent) {
      if (!closingFunction) return;

      const isEscapeKeyPressed = event.key === 'Escape';
      if (!isEscapeKeyPressed) return;

      closingFunction();
    }
  }, []);

  const modalRef = useRef<HTMLDivElement | null>(null);

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

    const modal = modalRef.current;
    const isClickInsideModal = modal && nativeEvent.composedPath().includes(modal);
    if (isClickInsideModal) return;

    closingFunction();
  }
};

export default Modal;
