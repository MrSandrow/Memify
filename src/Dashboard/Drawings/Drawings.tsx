import React, { FC, useState } from 'react';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';

import useCreateDrawing from './useCreateDrawing';
import useDrawings from './useDrawings';

import DrawingCard from './DrawingCard/DrawingCard';
import { Wrapper, Content, Message } from './Styles';

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
        <DrawingCard drawing={drawing} key={drawing['id']} />
      ));
    }

    return <Message>No drawings to display.</Message>;
  }
};

export default Drawings;
