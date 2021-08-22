import React, { FC } from 'react';
import styled from 'styled-components';
import { Trash2 as Reset } from '@styled-icons/feather';

const ResetIcon = styled(Reset)`
  cursor: pointer;
`;

const ResetButton:FC = () => (
  <ResetIcon size="1.5em" title="Reset" />
);

export default ResetButton;
