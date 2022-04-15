import React, { FC, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Modal from 'shared/components/Modal/Modal';

import useRenameDrawing from './useRenameDrawing';

import { StyledButton, Wrapper, Buttons } from './Styles';

interface Props {
  drawing: DocumentData;
}

const RenameDrawing:FC<Props> = ({ drawing }) => {
  const { renameDrawing } = useRenameDrawing();

  const [displayInputModal, setDisplayInputModal] = useState(false);
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  const [newName, setNewName] = useState('');

  return (
    <>
      <StyledButton
        icon="edit"
        onClick={() => setDisplayInputModal(true)}
        variant="empty"
      >
        Rename
      </StyledButton>

      {displayInputModal && (
      <Modal
        closingFunction={() => setDisplayInputModal(false)}
        renderContent={(closeModal) => (
          <Wrapper>
            <h2>Rename</h2>
            <Input
              onChange={(event) => setNewName(event.target.value)}
              placeholder="New name"
              value={newName}
            />

            <Buttons>
              <Button variant="secondary" onClick={closeModal}>Cancel</Button>
              <Button variant="primary" onClick={handleRename}>Rename</Button>
            </Buttons>
          </Wrapper>
        )}
        width="20em"
      />
      )}

      {displayErrorModal && (
      <AlertModal
        closingFunction={() => setDisplayErrorModal(false)}
        message="We could not rename your drawing."
        variant="error"
      />
      )}
    </>
  );

  function handleRename() {
    renameDrawing(drawing['id'], newName)
      .then(() => setDisplayInputModal(false))
      .catch(() => setDisplayErrorModal(true));
  }
};

export default RenameDrawing;
