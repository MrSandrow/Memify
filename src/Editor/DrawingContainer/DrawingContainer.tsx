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
  shouldDisplayPenMenu: boolean;
  shouldDownloadCanvas: boolean;
  setShouldDownloadCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawingContainer:FC<Props> = (props) => {
  const { shouldDisplayPenMenu, shouldDownloadCanvas, setShouldDownloadCanvas } = props;

  const [penColor, setPenColor] = useState('#000000');
  const [penThickness, setPenThickness] = useState(2);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setCanvasWidth(container.offsetWidth);
    setCanvasHeight(container.offsetHeight);
  }, []);

  return (
    <Container ref={containerRef}>
      <Canvas
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        penColor={penColor}
        penThickness={penThickness}
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
