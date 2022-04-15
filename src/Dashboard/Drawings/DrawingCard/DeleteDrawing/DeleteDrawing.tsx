import React, { FC, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import Modal from 'shared/components/Modal/Modal';

import useDeleteDrawing from './useDeleteDrawing';

import { StyledButton, Wrapper, Buttons } from './Styles';

interface Props {
  drawing: DocumentData
}

const DeleteDrawing:FC<Props> = ({ drawing }) => {
  const { deleteDrawing } = useDeleteDrawing();

  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <StyledButton
        icon="trash"
        onClick={() => setDisplayConfirmationModal(true)}
        variant="empty"
      >
        Delete
      </StyledButton>

      {displayConfirmationModal && (
      <Modal
        closingFunction={() => setDisplayConfirmationModal(false)}
        renderContent={(closeModal) => (
          <Wrapper>
            <h2>Delete</h2>
            <span>Are you sure you want to delete this drawing ?</span>

            <Buttons>
              <Button variant="secondary" onClick={closeModal}>Cancel</Button>
              <Button variant="primary" onClick={handleDelete}>Delete</Button>
            </Buttons>
          </Wrapper>
        )}
        width="20em"
      />
      )}

      {displayErrorModal && (
        <AlertModal
          closingFunction={() => setDisplayErrorModal(false)}
          message="We could not delete your drawing."
          variant="error"
        />
      )}
    </>
  );

  function handleDelete() {
    if (isDeleting) return;

    setIsDeleting(true);

    /* This is creating a memory leak. I might fix it sometime. */
    deleteDrawing(drawing['id'])
      .then(() => setDisplayConfirmationModal(false))
      .catch(() => setDisplayErrorModal(true))
      .finally(() => setIsDeleting(false));
  }
};

export default DeleteDrawing;
