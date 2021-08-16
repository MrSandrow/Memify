import React, { FC } from 'react';
import styled from 'styled-components';

import BaseStyles from './BaseStyles';
import NavigationContainer from './NavigationContainer/NavigationContainer';
import CanvasContainer from './CanvasContainer/CanvasContainer';
import ToolbarContainer from './ToolbarContainer/ToolbarContainer';

const navigationContainerHeight = '4rem';
const toolbarContainerHeight = '4rem';
const canvasContainerHeight = `calc(100% - ${navigationContainerHeight} - ${toolbarContainerHeight})`;

const Container = styled.div`
  display: grid;
  grid-template-rows: ${navigationContainerHeight} ${canvasContainerHeight} ${toolbarContainerHeight};
  height: 100%;
  width: 100%;
`;

const Editor:FC = () => (
  <Container>
    <BaseStyles />
    <NavigationContainer />
    <CanvasContainer />
    <ToolbarContainer />
  </Container>
);

export default Editor;
