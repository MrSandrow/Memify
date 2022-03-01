import React, { FC, useState } from 'react';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import Icon from 'shared/components/Icon/Icon';

import useCreateDrawing from './useCreateDrawing';
import useDrawings from './useDrawings';

import {
  Wrapper,
  Content,
  Message,
  Drawing,
  StyledLink,
  Details,
  Title,
} from './Styles';

const Drawings:FC = () => {
  const { createDrawing } = useCreateDrawing();

  const { drawings, isLoading, isError } = useDrawings();
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  return (
    <>
      <Wrapper>
        <Button
          icon="plusCircle"
          onClick={handleClick}
          variant="primary"
        >
          New drawing
        </Button>

        <Content>{displayDrawings()}</Content>
      </Wrapper>

      {displayErrorModal && (
      <AlertModal
        closingFunction={() => setDisplayErrorModal(false)}
        message="We could not create your drawing."
        variant="error"
      />
      )}
    </>
  );

  function handleClick() {
    createDrawing().catch(() => setDisplayErrorModal(true));
  }

  function displayDrawings() {
    if (isLoading) {
      return <Message>Loading...</Message>;
    }

    if (isError) {
      return <Message>Error, we could not display your drawings.</Message>;
    }

    if (drawings) {
      return drawings.map((drawing) => (
        <Drawing key={drawing['id']}>

          <StyledLink to={`/editor/${drawing['id']}`}>
            <Details>
              <Icon variant="file" size="1em" />
              <Title>{drawing['name']}</Title>
            </Details>
          </StyledLink>

          <Button
            disabled
            icon="moreHorizontal"
            variant="empty"
          />

        </Drawing>
      ));
    }

    return <Message>No drawings to display.</Message>;
  }
};

export default Drawings;
