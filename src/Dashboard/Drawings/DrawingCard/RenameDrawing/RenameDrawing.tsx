import React, { FC, useState, FormEvent } from 'react';
import { DocumentData } from 'firebase/firestore';

import AlertModal from 'shared/components/AlertModal/AlertModal';
import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import InputModal from 'shared/components/Modal/Modal';

import useRenameDrawing from './useRenameDrawing';

import { Form, Buttons } from './Styles';

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
          <Form onSubmit={handleRename}>
            <h2>Rename</h2>
            <Input
              autoFocus
              onChange={(event) => setNewName(event.target.value)}
              placeholder="New name"
              value={newName}
            />

            <Buttons>
              <Button type="button" variant="secondary" onClick={closeModal}>Cancel</Button>
              <Button type="submit" variant="primary">Rename</Button>
            </Buttons>
          </Form>
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

  function handleRename(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    renameDrawing(drawing['id'], newName)
      .then(() => closeInputModal())
      .catch(() => setDisplayErrorModal(true));
  }
};

export default RenameDrawing;
