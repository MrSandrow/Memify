import React, { FC, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import ConfirmationModal from 'shared/components/Modal/Modal';

import useDeleteDrawing from './useDeleteDrawing';

import { Wrapper, Buttons } from './Styles';

interface Props {
  closingFunction: () => void;
  drawing: DocumentData
}

const DeleteDrawing:FC<Props> = ({ closingFunction: closeConfirmationModal, drawing }) => {
  const { deleteDrawing } = useDeleteDrawing();

  const [displayErrorModal, setDisplayErrorModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <ConfirmationModal
        closingFunction={closeConfirmationModal}
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

    /* This is creating a memory leak. I might fix it someday. */
    deleteDrawing(drawing['id'])
      .then(() => closeConfirmationModal())
      .catch(() => setDisplayErrorModal(true))
      .finally(() => setIsDeleting(false));
  }
};

export default DeleteDrawing;
