import React, { FC, useState } from 'react';
import styled from 'styled-components';

import BaseStyles from './BaseStyles';
import NavigationContainer from './NavigationContainer/NavigationContainer';
import DrawingContainer from './DrawingContainer/DrawingContainer';
import ToolbarContainer from './ToolbarContainer/ToolbarContainer';

const navigationContainerHeight = '4rem';
const toolbarContainerHeight = '4rem';
const drawingContainerHeight = `max(12rem, calc(100vh - ${navigationContainerHeight} - ${toolbarContainerHeight}))`;

const Container = styled.div`
  display: grid;
  grid-template-rows: ${navigationContainerHeight} ${drawingContainerHeight} ${toolbarContainerHeight};
`;

const Editor:FC = () => {
  const [shouldDisplayPenMenu, setShouldDisplayPenMenu] = useState(false);
  const [shouldDownloadCanvas, setShouldDownloadCanvas] = useState(false);

  return (
    <Container>
      <BaseStyles />
      <NavigationContainer />
      <DrawingContainer
        shouldDisplayPenMenu={shouldDisplayPenMenu}
        shouldDownloadCanvas={shouldDownloadCanvas}
        setShouldDownloadCanvas={setShouldDownloadCanvas}
      />
      <ToolbarContainer
        setShouldDisplayPenMenu={setShouldDisplayPenMenu}
        setShouldDownloadCanvas={setShouldDownloadCanvas}
      />
    </Container>
  );
};

export default Editor;
