import React, { FC } from 'react';
import styled from 'styled-components';

import ToolsButton from './ToolsButton/ToolsButton';
import UndoButton from './UndoButton/UndoButton';
import RedoButton from './RedoButton/RedoButton';
import DownloadButton from './DownloadButton/DownloadButton';

const Container = styled.div`
  align-items: center;
  background: #292929;
  border-radius: 0.25rem 0.25rem 0 0;
  color: #dddddd;
  display: flex;
  font-size: 1.4rem;
  height: 100%;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;

const ToolbarContainer:FC = () => (
  <Container>
    <UndoButton />
    <RedoButton />
    <ToolsButton />
    <DownloadButton />
  </Container>
);

export default ToolbarContainer;
