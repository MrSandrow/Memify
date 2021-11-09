import React, {
  FC, useLayoutEffect, useState, useRef,
} from 'react';
import styled from 'styled-components';

import Canvas from './Canvas/Canvas';
import PenMenu from './PenMenu/PenMenu';

const Container = styled.div`
  display: flex;
  height: calc(100% - 2.25rem);
  margin: auto;
  max-width: 1200px;
  position: relative;
  width: 87.5%;
`;

interface Props {
  /* Handles undo/redo in the canvas */
  shouldUndo: boolean;
  setShouldUndo: React.Dispatch<React.SetStateAction<boolean>>;
  shouldRedo: boolean;
  setShouldRedo: React.Dispatch<React.SetStateAction<boolean>>;
  /* Displays the pen menu */
  shouldDisplayPenMenu: boolean;
  /* Resets the canvas */
  shouldResetCanvas: boolean;
  setShouldResetCanvas: React.Dispatch<React.SetStateAction<boolean>>;
  /* Downloads the canvas */
  shouldDownloadCanvas: boolean;
  setShouldDownloadCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawingContainer:FC<Props> = (props) => {
  const { shouldDisplayPenMenu } = props;

  const { shouldUndo, setShouldUndo } = props;
  const { shouldRedo, setShouldRedo } = props;
  const { shouldResetCanvas, setShouldResetCanvas } = props;
  const { shouldDownloadCanvas, setShouldDownloadCanvas } = props;

  const [penColor, setPenColor] = useState('#000000');
  const [penThickness, setPenThickness] = useState(2);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = Math.floor(container.getBoundingClientRect().width);
    const containerHeight = Math.floor(container.getBoundingClientRect().height);

    setCanvasWidth(containerWidth);
    setCanvasHeight(containerHeight);
  }, []);

  return (
    <Container ref={containerRef}>
      <Canvas
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        penColor={penColor}
        penThickness={penThickness}
        /* Handles undo/redo in the canvas */
        shouldUndo={shouldUndo}
        setShouldUndo={setShouldUndo}
        shouldRedo={shouldRedo}
        setShouldRedo={setShouldRedo}
        /* Resets the canvas */
        shouldResetCanvas={shouldResetCanvas}
        setShouldResetCanvas={setShouldResetCanvas}
        /* Downloads the canvas */
        shouldDownloadCanvas={shouldDownloadCanvas}
        setShouldDownloadCanvas={setShouldDownloadCanvas}
      />

      {shouldDisplayPenMenu && (
      <PenMenu
        penColor={penColor}
        setPenColor={setPenColor}
        penThickness={penThickness}
        setPenThickness={setPenThickness}
      />
      )}
    </Container>
  );
};

export default DrawingContainer;
