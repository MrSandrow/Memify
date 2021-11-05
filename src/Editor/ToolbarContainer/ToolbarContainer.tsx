import React, { FC } from 'react';
import styled from 'styled-components';

import UndoButton from './UndoButton/UndoButton';
import RedoButton from './RedoButton/RedoButton';
import PenButton from './PenButton/PenButton';
import ResetButton from './ResetButton/ResetButton';
import DownloadButton from './DownloadButton/DownloadButton';

const Container = styled.div`
  align-items: center;
  background: #292929;
  border-radius: 0.25rem 0.25rem 0 0;
  color: #dddddd;
  display: flex;
  font-size: 1.45rem;
  height: 100%;
  justify-content: space-evenly;
  margin: auto;
  max-width: 1200px;
  width: 100%;
`;

interface Props {
  shouldDisplayPenMenu: boolean;
  setShouldDisplayPenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldResetCanvas: React.Dispatch<React.SetStateAction<boolean>>;
  setShouldDownloadCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToolbarContainer:FC<Props> = (props) => {
  const { shouldDisplayPenMenu, setShouldDisplayPenMenu } = props;
  const { setShouldResetCanvas } = props;
  const { setShouldDownloadCanvas } = props;

  return (
    <Container>
      <UndoButton />
      <RedoButton />
      <PenButton
        shouldDisplayPenMenu={shouldDisplayPenMenu}
        setShouldDisplayPenMenu={setShouldDisplayPenMenu}
      />
      <ResetButton
        setShouldResetCanvas={setShouldResetCanvas}
      />
      <DownloadButton
        setShouldDownloadCanvas={setShouldDownloadCanvas}
      />
    </Container>
  );
};

export default ToolbarContainer;
