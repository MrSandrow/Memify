import React, { FC } from 'react';
import styled from 'styled-components';
import { Edit3 as Pen } from '@styled-icons/feather';

interface PenIconProps {
  isActive: boolean;
}

const PenIcon = styled(Pen)<PenIconProps>`
  color: ${(props) => props.isActive && '#8f8f8f'};
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #8f8f8f;
    }
  }
`;

interface Props {
  shouldDisplayPenMenu: boolean;
  setShouldDisplayPenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PenButton:FC<Props> = (props) => {
  const { shouldDisplayPenMenu, setShouldDisplayPenMenu } = props;

  return (
    <PenIcon
      size="1.5em"
      title="Pen Settings"
      isActive={shouldDisplayPenMenu}
      onClick={() => setShouldDisplayPenMenu((currentState) => !currentState)}
    />
  );
};

export default PenButton;
