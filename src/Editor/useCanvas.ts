import { useState, PointerEvent } from 'react';

const useCanvas = (
  contextRef: CanvasRenderingContext2D | null,
  initialCanvasSize: number | undefined,
  currentCanvasSize: number | null,
) => {
  const [isDrawing, setIsDrawing] = useState(false);

  function startDrawing(event: PointerEvent) {
    if (!contextRef) return;

    const { offsetX, offsetY } = event.nativeEvent;
    const pointerX = offsetX * getResizeRatio();
    const pointerY = offsetY * getResizeRatio();

    /* This draws a dot onPointerDown. */
    const dotSize = Number(contextRef.lineWidth) * 2;
    contextRef.fillRect(pointerX, pointerY, dotSize, dotSize);

    contextRef.beginPath();
    contextRef.moveTo(pointerX, pointerY);

    setIsDrawing(true);
  }

  function draw(event: PointerEvent) {
    if (!contextRef || !isDrawing) return;

    const { offsetX, offsetY } = event.nativeEvent;
    const pointerX = offsetX * getResizeRatio();
    const pointerY = offsetY * getResizeRatio();

    contextRef.lineTo(pointerX, pointerY);
    contextRef.stroke();

    /* This works like onPointerOut on devices that do not support it. */
    if (!isPointerInsideCanvas(pointerX, pointerY)) stopDrawing();
  }

  function stopDrawing() {
    if (!contextRef) return;

    contextRef.closePath();
    setIsDrawing(false);
  }

  function getResizeRatio() {
    if (!initialCanvasSize || !currentCanvasSize) {
      return 1;
    }

    return (initialCanvasSize / currentCanvasSize);
  }

  function isPointerInsideCanvas(pointerX: number, pointerY: number) {
    if (!initialCanvasSize) return false;

    const isPointerXInsideCanvas = pointerX >= 0 && pointerX <= initialCanvasSize;
    const isPointerYInsideCanvas = pointerY >= 0 && pointerY <= initialCanvasSize;

    return isPointerXInsideCanvas && isPointerYInsideCanvas;
  }

  return { startDrawing, draw, stopDrawing };
};

export default useCanvas;
