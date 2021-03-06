import React, {
  FC,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { DocumentData } from 'firebase/firestore';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import ConfirmationModal from 'shared/components/Modal/Modal';

import useDeleteDrawing from './useDeleteDrawing';

import { Wrapper, Buttons } from './Styles';

interface Props {
  closingFunction: () => void;
  drawing: DocumentData;
  isDeleting: boolean;
  setIsDeleting: Dispatch<SetStateAction<boolean>>;
}

const DeleteDrawing:FC<Props> = ({
  closingFunction: closeConfirmationModal,
  drawing,
  isDeleting,
  setIsDeleting,
}) => {
  const { deleteDrawing } = useDeleteDrawing();

  const [displayErrorModal, setDisplayErrorModal] = useState(false);

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

    /* This might update the state of another component after it has been unmounted, thus triggering
    an error message saying that there is a memory leak, but I am pretty sure there is none. */
    deleteDrawing(drawing['id'])
      .then(() => closeConfirmationModal())
      .catch(() => setDisplayErrorModal(true))
      .finally(() => setIsDeleting(false));
  }
};

export default DeleteDrawing;
