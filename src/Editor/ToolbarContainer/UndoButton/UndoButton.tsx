import React, { FC } from 'react';
import styled from 'styled-components';
import { RotateCcw as Undo } from '@styled-icons/feather';

const UndoIcon = styled(Undo)`
  cursor: pointer;
`;

const UndoButton:FC = () => (
  <UndoIcon size="1.5em" title="Undo" />
);

export default UndoButton;
