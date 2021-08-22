import React, {
  FC, useRef, useLayoutEffect, useState,
} from 'react';
import styled from 'styled-components';

const CanvasElement = styled.canvas`
  background: white;
  border-radius: 0.25rem;
  cursor: crosshair;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
`;

const Canvas:FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasContainer = canvas.parentElement;
    if (!canvasContainer) return;

    canvas.width = canvasContainer.offsetWidth * 2;
    canvas.height = canvasContainer.offsetHeight * 2;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.scale(2, 2);
    context.lineCap = 'round';

    contextRef.current = context;

    // Move code below to another function
    context.strokeStyle = 'black';
    context.lineWidth = 5;
  }, []);

  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (event: any) => {
    console.log(event);

    const { offsetX, offsetY } = event.nativeEvent;

    contextRef.current?.beginPath();
    contextRef.current?.moveTo(offsetX, offsetY);

    setIsDrawing(true);
  };

  const drawLine = (event: any) => {
    console.log(event);

    const { offsetX, offsetY } = event.nativeEvent;

    if (!isDrawing) return;

    contextRef.current?.lineTo(offsetX, offsetY);
    contextRef.current?.stroke();
  };

  const stopDrawing = (event: any) => {
    console.log(event);

    contextRef.current?.closePath();
    setIsDrawing(false);
  };

  return (
    <CanvasElement
      ref={canvasRef}
      // onTouchStart={startDrawing}
      // onTouchMove={drawLine}
      // onTouchEnd={stopDrawing}
      onMouseDown={startDrawing}
      onMouseMove={drawLine}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
    />
  );
};

export default Canvas;
