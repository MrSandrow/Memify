import React, { FC, useState, PointerEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

import Navbar from 'shared/components/Navbar/Navbar';
import Button from 'shared/components/Button/Button';
import Modal from 'shared/components/Modal/Modal';
import AlertModal from 'shared/components/AlertModal/AlertModal';

import useResize from './useResize';
import useDrawing from './useDrawing';
import useBackground from './useBackground';
import useCanvas from './useCanvas';
import useSaveDrawing from './useSaveDrawing';

import {
  Wrapper,
  Content,
  LargeMessage,
  Message,
  CanvasWrapper,
  Canvas,
} from './Styles';

const Editor:FC = () => {
  const [wrapperRef, setWrapperRef] = useState<HTMLDivElement | null>(null);
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const [contextRef, setContextRef] = useState<CanvasRenderingContext2D | null>(null);

  const { initialCanvasSize, currentCanvasSize: cssCanvasSize } = useResize(wrapperRef);
  const { id: drawingId } = useParams();
  const { drawing, isLoading, isError } = useDrawing(drawingId);
  const { backgroundSize } = useBackground(canvasRef, contextRef, drawing);
  const realCanvasSize = backgroundSize || initialCanvasSize || undefined;
  const { startDrawing, draw, stopDrawing } = useCanvas(contextRef, realCanvasSize, cssCanvasSize);
  const { saveDrawing } = useSaveDrawing();

  const [isDirty, setIsDirty] = useState(false);
  const [displaySavingModal, setDisplaySavingModal] = useState(false);
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  return (
    <>
      <Wrapper>
        <Navbar
          renderLeftButton={() => (
            <Link to="/drawings">
              <Button
                icon="arrowLeftCircle"
                variant="empty"
              />
            </Link>
          )}
          renderRightButton={() => (
            <Button
              disabled={!isDirty}
              icon="save"
              onClick={handleSave}
              variant="empty"
            />
          )}
        />

        <Content>{displayCanvas()}</Content>
      </Wrapper>

      {displaySavingModal && (
        <Modal
          renderContent={() => <LargeMessage>Saving...</LargeMessage>}
          width="fit-content"
        />
      )}

      {displayErrorModal && (
      <AlertModal
        closingFunction={() => setDisplayErrorModal(false)}
        message="We could not save your drawing."
        variant="error"
      />
      )}
    </>
  );

  function handleSave() {
    if (!canvasRef) return;

    canvasRef.toBlob((blob) => {
      if (!blob) return;

      setDisplaySavingModal(true);

      saveDrawing(drawingId, blob)
        .then(() => setIsDirty(false))
        .catch(() => setDisplayErrorModal(true))
        .finally(() => setDisplaySavingModal(false));
    });
  }

  function displayCanvas() {
    if (isLoading) {
      return <Message>Loading...</Message>;
    }

    if (isError) {
      return <Message>Error, we could not display your drawing.</Message>;
    }

    return (
      <CanvasWrapper ref={setWrapperRef}>
        <Canvas
          ref={handleRef}
          height={realCanvasSize}
          width={realCanvasSize}
          cssHeight={cssCanvasSize}
          cssWidth={cssCanvasSize}
          /* Event Handlers */
          onPointerDown={handlePointerDown}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerOut={stopDrawing}
        />
      </CanvasWrapper>
    );
  }

  function handleRef(canvas: HTMLCanvasElement | null) {
    setCanvasRef(canvas);
    setContextRef(canvas?.getContext('2d') || null);
  }

  function handlePointerDown(event: PointerEvent) {
    startDrawing(event);
    setIsDirty(true);
  }
};

export default Editor;
