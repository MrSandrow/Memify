import React, { FC } from 'react';
import styled from 'styled-components';

import Canvas from './Canvas/Canvas';

const Container = styled.div`
  display: flex;
  height: calc(100% - 2.25rem);
  margin: auto;
  max-width: 1200px;
  width: 87.5%;
`;

const CanvasContainer:FC = () => (
  <Container>
    <Canvas />
  </Container>
);

export default CanvasContainer;
