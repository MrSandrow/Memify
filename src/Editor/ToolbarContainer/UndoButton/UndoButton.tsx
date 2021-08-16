import React, { FC } from 'react';
import styled from 'styled-components';
import { Undo } from '@styled-icons/icomoon/Undo';

const UndoIcon = styled(Undo)`
  cursor: pointer;
`;

const UndoButton:FC = () => (
  <UndoIcon size="1.25em" title="Undo" />
);

export default UndoButton;
