import React, { FC, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import Button from 'shared/components/Button/Button';
import Icon from 'shared/components/Icon/Icon';
import Tooltip from 'shared/components/Tooltip/Tooltip';

import RenameDrawing from './RenameDrawing/RenameDrawing';
import DeleteDrawing from './DeleteDrawing/DeleteDrawing';

import {
  Wrapper,
  Card,
  StyledLink,
  Details,
  Title,
  TooltipButton,
} from './Styles';

interface Props {
  drawing: DocumentData;
}

const DrawingCard:FC<Props> = ({ drawing }) => {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const [displayRenameModal, setDisplayRenameModal] = useState(false);
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);

  return (
    <>
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
            onClick={() => setDisplayTooltip(true)}
            variant="empty"
          />

        </Card>

        {displayTooltip && (
        <Tooltip
          closingFunction={() => setDisplayTooltip(false)}
          renderContent={(closeTooltip) => (
            <>
              <TooltipButton
                icon="edit"
                onClick={() => {
                  closeTooltip();
                  setDisplayRenameModal(true);
                }}
                variant="empty"
              >
                Rename
              </TooltipButton>

              <TooltipButton
                icon="trash"
                onClick={() => {
                  closeTooltip();
                  setDisplayDeleteModal(true);
                }}
                variant="empty"
              >
                Delete
              </TooltipButton>
            </>
          )}
        />
        )}
      </Wrapper>

      {displayRenameModal && (
        <RenameDrawing
          closingFunction={() => setDisplayRenameModal(false)}
          drawing={drawing}
        />
      )}

      {displayDeleteModal && (
        <DeleteDrawing
          closingFunction={() => setDisplayDeleteModal(false)}
          drawing={drawing}
        />
      )}
    </>
  );
};

export default DrawingCard;
