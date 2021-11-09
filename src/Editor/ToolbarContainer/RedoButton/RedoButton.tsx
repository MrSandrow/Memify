import React, { FC } from 'react';
import styled from 'styled-components';
import { RotateCw as Redo } from '@styled-icons/feather';

const RedoIcon = styled(Redo)`
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #8f8f8f;
    }
  }
`;

interface Props {
  setShouldRedo: React.Dispatch<React.SetStateAction<boolean>>;
}

const RedoButton:FC<Props> = (props) => {
  const { setShouldRedo } = props;

  return (
    <RedoIcon
      size="1.5em"
      title="Redo"
      onClick={() => setShouldRedo(true)}
    />
  );
};

export default RedoButton;
