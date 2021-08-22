import React, { FC } from 'react';
import styled from 'styled-components';
import { Save } from '@styled-icons/feather';

const SaveIcon = styled(Save)`
  cursor: pointer;
`;

const SaveButton:FC = () => (
  <SaveIcon size="1.35em" title="Save" />
);

export default SaveButton;
