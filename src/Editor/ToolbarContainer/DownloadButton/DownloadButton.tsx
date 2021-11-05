import React, { FC } from 'react';
import styled from 'styled-components';
import { Download } from '@styled-icons/feather';

const DownloadIcon = styled(Download)`
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #8f8f8f;
    }
  }
`;

interface Props {
  setShouldDownloadCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const DownloadButton:FC<Props> = (props) => {
  const { setShouldDownloadCanvas } = props;

  return (
    <DownloadIcon
      size="1.5em"
      title="Download"
      onClick={() => setShouldDownloadCanvas(true)}
    />
  );
};

export default DownloadButton;
