import React, { FC } from 'react';
import styled from 'styled-components';
import { RotateCw as Redo } from '@styled-icons/feather';

const RedoIcon = styled(Redo)`
  cursor: pointer;
`;

const RedoButton:FC = () => (
  <RedoIcon size="1.5em" title="Redo" />
);

export default RedoButton;
