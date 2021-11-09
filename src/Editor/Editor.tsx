import React, { FC, useState } from 'react';
import styled from 'styled-components';

import BaseStyles from './BaseStyles';
import NavigationContainer from './NavigationContainer/NavigationContainer';
import DrawingContainer from './DrawingContainer/DrawingContainer';
import ToolbarContainer from './ToolbarContainer/ToolbarContainer';

const navigationContainerHeight = '4rem';
const toolbarContainerHeight = '4rem';
const drawingContainerHeight = `calc(100% - ${navigationContainerHeight} - ${toolbarContainerHeight})`;

const Container = styled.div`
  display: grid;
  grid-template-rows: ${navigationContainerHeight} ${drawingContainerHeight} ${toolbarContainerHeight};
  height: 100%;
  width: 100%;
`;

const Editor:FC = () => {
  const [shouldUndo, setShouldUndo] = useState(false);
  const [shouldRedo, setShouldRedo] = useState(false);
  const [shouldDisplayPenMenu, setShouldDisplayPenMenu] = useState(false);
  const [shouldResetCanvas, setShouldResetCanvas] = useState(false);
  const [shouldDownloadCanvas, setShouldDownloadCanvas] = useState(false);

  return (
    <Container>
      <BaseStyles />
      <NavigationContainer />
      <DrawingContainer
        /* Handles undo/redo in the canvas */
        shouldUndo={shouldUndo}
        setShouldUndo={setShouldUndo}
        shouldRedo={shouldRedo}
        setShouldRedo={setShouldRedo}
        /* Displays the pen menu */
        shouldDisplayPenMenu={shouldDisplayPenMenu}
        /* Resets the canvas */
        shouldResetCanvas={shouldResetCanvas}
        setShouldResetCanvas={setShouldResetCanvas}
        /* Downloads the canvas */
        shouldDownloadCanvas={shouldDownloadCanvas}
        setShouldDownloadCanvas={setShouldDownloadCanvas}
      />
      <ToolbarContainer
        /* Handles undo/redo in the canvas */
        setShouldUndo={setShouldUndo}
        setShouldRedo={setShouldRedo}
        /* Displays the pen menu */
        shouldDisplayPenMenu={shouldDisplayPenMenu}
        setShouldDisplayPenMenu={setShouldDisplayPenMenu}
        /* Resets the canvas */
        setShouldResetCanvas={setShouldResetCanvas}
        /* Downloads the canvas */
        setShouldDownloadCanvas={setShouldDownloadCanvas}
      />
    </Container>
  );
};

export default Editor;
