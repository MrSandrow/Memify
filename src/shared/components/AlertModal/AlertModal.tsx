import React, { FC } from 'react';

import Button from 'shared/components/Button/Button';
import Modal from 'shared/components/Modal/Modal';

import Wrapper from './Styles';

interface Props {
  closingFunction: () => void;
  isOpen: boolean;
  message: string;
  variant: 'success' | 'error';
}

const titleVariants = {
  success: 'Success !',
  error: 'Error !',
};

const buttonVariants = {
  success: 'primary' as 'primary',
  error: 'danger' as 'danger',
};

const AlertModal:FC<Props> = ({
  closingFunction,
  isOpen,
  message,
  variant,
}) => (
  <Modal
    closingFunction={closingFunction}
    isOpen={isOpen}
    renderContent={(closeModal) => (
      <Wrapper>
        <h2>{titleVariants[variant]}</h2>
        <span>{message}</span>
        <Button
          onClick={closeModal}
          variant={buttonVariants[variant]}
        >
          Close
        </Button>
      </Wrapper>
    )}
    width="20em"
  />
);

export default AlertModal;
