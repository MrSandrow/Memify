import React, { FC } from 'react';
import styled from 'styled-components';
import { Redo } from '@styled-icons/icomoon/Redo';

const RedoIcon = styled(Redo)`
  cursor: pointer;
`;

const RedoButton:FC = () => (
  <RedoIcon size="1.25em" title="Redo" />
);

export default RedoButton;
