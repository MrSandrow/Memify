import React, { FC } from 'react';
import styled from 'styled-components';
import { RotateCcw as Undo } from '@styled-icons/feather';

const UndoIcon = styled(Undo)`
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #8f8f8f;
    }
  }
`;

interface Props {
  setShouldUndo: React.Dispatch<React.SetStateAction<boolean>>;
}

const UndoButton:FC<Props> = (props) => {
  const { setShouldUndo } = props;

  return (
    <UndoIcon
      size="1.5em"
      title="Undo"
      onClick={() => setShouldUndo(true)}
    />
  );
};

export default UndoButton;
