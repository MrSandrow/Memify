import React, { FC } from 'react';
import styled from 'styled-components';
import { Edit3 as Pen } from '@styled-icons/feather';

const PenIcon = styled(Pen)`
  cursor: pointer;
`;

interface Props {
  setShouldDisplayPenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PenButton:FC<Props> = (props) => {
  const { setShouldDisplayPenMenu } = props;

  return (
    <PenIcon
      size="1.5em"
      title="Pen Settings"
      onClick={() => setShouldDisplayPenMenu((currentState) => !currentState)}
    />
  );
};

export default PenButton;
