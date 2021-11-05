import React, { FC } from 'react';
import styled from 'styled-components';
import { Trash2 as Reset } from '@styled-icons/feather';

const ResetIcon = styled(Reset)`
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #8f8f8f;
    }
  }
`;

interface Props {
  setShouldResetCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResetButton:FC<Props> = (props) => {
  const { setShouldResetCanvas } = props;

  return (
    <ResetIcon
      size="1.5em"
      title="Reset"
      onClick={() => setShouldResetCanvas(true)}
    />
  );
};

export default ResetButton;
