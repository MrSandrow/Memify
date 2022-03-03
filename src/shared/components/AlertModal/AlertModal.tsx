import React, { FC } from 'react';

import Button from 'shared/components/Button/Button';
import Modal from 'shared/components/Modal/Modal';

import Wrapper from './Styles';

interface Props {
  closingFunction: () => void;
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
  message,
  variant,
}) => (
  <Modal
    closingFunction={closingFunction}
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
