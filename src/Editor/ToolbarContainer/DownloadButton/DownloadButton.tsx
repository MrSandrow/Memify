import React, { FC } from 'react';
import styled from 'styled-components';
import { Download } from '@styled-icons/bootstrap/Download';

const DownloadIcon = styled(Download)`
  cursor: pointer;
`;

const DownloadButton:FC = () => (
  <DownloadIcon size="1.44em" title="Download" />
);

export default DownloadButton;
