import React, { FC } from 'react';
import styled from 'styled-components';
import { PencilSquare } from '@styled-icons/bootstrap/PencilSquare';

const ToolsIcon = styled(PencilSquare)`
  cursor: pointer;
`;

const ToolsButton:FC = () => (
  <ToolsIcon size="1.35em" title="Tools" />
);

export default ToolsButton;
