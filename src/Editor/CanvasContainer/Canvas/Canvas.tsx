import React, { FC, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasElement = styled.canvas`
  background: white;
  border-radius: 0.25rem;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
`;

const Canvas:FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const setCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasContainer = canvas.parentElement;
    if (!canvasContainer) return;

    const canvasWidth = canvasContainer.offsetWidth;
    const canvasHeight = canvasContainer.offsetHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  };

  useLayoutEffect(setCanvasSize, []);

  return (
    <CanvasElement ref={canvasRef} />
  );
};

export default Canvas;
