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

const UndoButton:FC = () => (
  <UndoIcon size="1.5em" title="Undo" />
);

export default UndoButton;
