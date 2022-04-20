import React, { FC, useState } from 'react';
import { DocumentData } from 'firebase/firestore';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import InputModal from 'shared/components/Modal/Modal';

import useRenameDrawing from './useRenameDrawing';

import { Wrapper, Buttons } from './Styles';

interface Props {
  closingFunction: () => void;
  drawing: DocumentData;
}

const RenameDrawing:FC<Props> = ({ closingFunction: closeInputModal, drawing }) => {
  const { renameDrawing } = useRenameDrawing();

  const [newName, setNewName] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  return (
    <>
      <InputModal
        closingFunction={closeInputModal}
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
      .then(() => closeInputModal())
      .catch(() => setDisplayErrorModal(true));
  }
};

export default RenameDrawing;
