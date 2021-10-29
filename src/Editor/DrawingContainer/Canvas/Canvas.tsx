import React, {
  FC, useRef, useState, useEffect, MouseEvent, TouchEvent,
} from 'react';
import styled from 'styled-components';

interface ContainerProps {
  maxWidth: number;
  maxHeight: number;
}

const Container = styled.div<ContainerProps>`
  /* The padding just below is here to fix a visual bug */
  display: flex;
  height: 100%;
  margin: auto;
  max-height: ${(props) => props.maxHeight}px;
  max-width: ${(props) => props.maxWidth}px;
  padding: 0.05rem;
  width: 100%;
`;

const CanvasElement = styled.canvas`
  background: white;
  border-radius: 0.25rem;
  cursor: crosshair;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  touch-action: none;
  user-select: none;
`;

interface Props {
  canvasWidth: number;
  canvasHeight: number;
  penColor: string;
  penThickness: number;
  shouldDownloadCanvas: boolean;
  setShouldDownloadCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const Canvas:FC<Props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const { canvasWidth, canvasHeight } = props;
  const { penColor, penThickness } = props;

  /* This useEffect needs to be triggered on canvasWidth/canvasHeight changes
  for contextRef.current properties to be passed to the drawing functions below. */

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext('2d');
    if (!context) return undefined;

    context.scale(2, 2);
    context.imageSmoothingQuality = 'high';
    context.lineCap = 'round';

    context.strokeStyle = penColor;
    context.lineWidth = penThickness;

    contextRef.current = context;

    return () => context.resetTransform();
  }, [canvasWidth, canvasHeight, penColor, penThickness]);

  /* Makes sure that the line that is being drawn will always
  be under the mouse pointer, even after resizing the canvas. */

  const [resizeRatio, setResizeRatio] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const canvas = entries[0].target as HTMLCanvasElement;

      const initialCanvasWidth = canvasWidth;
      const newCanvasWidth = canvas.offsetWidth;

      setResizeRatio(initialCanvasWidth / newCanvasWidth);
    });

    if (!canvasRef.current) return undefined;
    observer.observe(canvasRef.current);

    return () => observer.disconnect();
  }, [canvasWidth]);

  /* Downloads the canvas when needed */

  const { shouldDownloadCanvas, setShouldDownloadCanvas } = props;

  useEffect(() => {
    if (!shouldDownloadCanvas) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    /* Adds a white background to the canvas */
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.globalCompositeOperation = 'source-over';

    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = 'Memify';
    a.click();

    setShouldDownloadCanvas(false);
  }, [shouldDownloadCanvas]);

  /* Drawing functions */

  type ReactEvent = MouseEvent | TouchEvent;
  const [isDrawing, setIsDrawing] = useState(false);

  function startDrawing(event: ReactEvent) {
    const reactEvent = 'touches' in event ? event.touches[0] : event;

    const { offsetWidth, offsetHeight } = reactEvent.target as HTMLCanvasElement;
    const { clientHeight: windowHeight, clientWidth: windowWidth } = document.documentElement;

    const offsetLeft = (windowWidth - offsetWidth) / 2;
    const offsetTop = (windowHeight - offsetHeight) / 2;

    const { pageX, pageY } = reactEvent;

    const pointerX = (pageX - offsetLeft) * resizeRatio;
    const pointerY = (pageY - offsetTop) * resizeRatio;

    contextRef.current?.beginPath();
    contextRef.current?.moveTo(pointerX, pointerY);

    setIsDrawing(true);
  }

  const [debug, setDebug] = useState('');

  function draw(event: ReactEvent) {
    if (!isDrawing) return;

    const reactEvent = 'touches' in event ? event.touches[0] : event;

    const { offsetWidth, offsetHeight } = reactEvent.target as HTMLCanvasElement;
    const { clientHeight: windowHeight, clientWidth: windowWidth } = document.documentElement;

    const offsetLeft = (windowWidth - offsetWidth) / 2;
    const offsetTop = (windowHeight - offsetHeight) / 2;

    const { pageX, pageY } = reactEvent;

    const pointerX = (pageX - offsetLeft) * resizeRatio;
    const pointerY = (pageY - offsetTop) * resizeRatio;

    setDebug(`pointerX:${pointerX}, pageX:${pageX}, offsetLeft:${offsetLeft}, windowWidth:${windowWidth}, offsetWidth:${offsetWidth}, resizeRatio:${resizeRatio}`);

    contextRef.current?.lineTo(pointerX, pointerY);
    contextRef.current?.stroke();

    /* The code just below is only here for touch events.
    The same feature is handled with onMouseOut for mouse events. */

    /* eslint-disable-next-line @typescript-eslint/no-use-before-define */
    if (!isPointerInsideCanvas(event)) stopDrawing();
  }

  function stopDrawing() {
    contextRef.current?.closePath();
    setIsDrawing(false);
  }

  function isPointerInsideCanvas(event: ReactEvent) {
    const reactEvent = 'touches' in event ? event.touches[0] : event;

    const { offsetWidth, offsetHeight } = reactEvent.target as HTMLCanvasElement;
    const { clientHeight: windowHeight, clientWidth: windowWidth } = document.documentElement;

    const offsetLeft = (windowWidth - offsetWidth) / 2;
    const offsetTop = (windowHeight - offsetHeight) / 2;

    const { pageX, pageY } = reactEvent;

    const pointerX = (pageX - offsetLeft) * resizeRatio;
    const pointerY = (pageY - offsetTop) * resizeRatio;

    const isHorizontallyInsideCanvas = pointerX > 0 && pointerX < (offsetWidth * resizeRatio);
    const isVerticallyInsideCanvas = pointerY > 0 && pointerY < (offsetHeight * resizeRatio);

    return isHorizontallyInsideCanvas && isVerticallyInsideCanvas;
  }

  return (
    <Container maxWidth={canvasWidth} maxHeight={canvasHeight}>
      <CanvasElement
        ref={canvasRef}
        data-testid="canvas"
        /* canvasWidth and canvasHeight are multiplied by 2
        to allow the canvas to handle high resolution screens */
        width={canvasWidth * 2}
        height={canvasHeight * 2}
        /* Mouse Events */
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
        /* Touch Events */
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <p style={{ color: '#e0d8d8' }}>{debug}</p>
    </Container>
  );
};

export default Canvas;
