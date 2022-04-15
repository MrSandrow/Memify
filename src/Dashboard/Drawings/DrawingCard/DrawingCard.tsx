import React, { FC, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import Button from 'shared/components/Button/Button';
import Icon from 'shared/components/Icon/Icon';
import Tooltip from 'shared/components/Tooltip/Tooltip';

import DeleteDrawing from './DeleteDrawing/DeleteDrawing';
import RenameDrawing from './RenameDrawing/RenameDrawing';
import {
  Wrapper,
  Card,
  StyledLink,
  Details,
  Title,
} from './Styles';

interface Props {
  drawing: DocumentData;
}

const DrawingCard:FC<Props> = ({ drawing }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  return (
    <Wrapper>
      <Card>

        <StyledLink to={`/editor/${drawing['id']}`}>
          <Details>
            <Icon variant="file" size="1em" />
            <Title>{drawing['name']}</Title>
          </Details>
        </StyledLink>

        <Button
          icon="moreHorizontal"
          onClick={() => setDisplayTooltip((prevState) => !prevState)}
          variant="empty"
        />

      </Card>

      {displayTooltip && (
      <Tooltip>
        <RenameDrawing drawing={drawing} />
        <DeleteDrawing drawing={drawing} />
      </Tooltip>
      )}
    </Wrapper>
  );
};

export default DrawingCard;
