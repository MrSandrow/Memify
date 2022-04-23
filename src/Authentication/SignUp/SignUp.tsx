import React, { FC, useState, FormEvent } from 'react';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Logo from 'shared/components/Logo/Logo';
import AlertModal from 'shared/components/AlertModal/AlertModal';

import useSignUp from './useSignUp';

import { Wrapper, Form, StyledLink } from './Styles';

const SignUp:FC = () => {
  const { signUp } = useSignUp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  return (
    <>
      <Wrapper>
        <Logo size="2.5em" />

        <Form onSubmit={handleSubmit}>
          <Input
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
            type="email"
            value={email}
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            minLength={6}
            placeholder="Password"
            required
            type="password"
            value={password}
          />
          <Button type="submit" variant="primary">Sign up</Button>
        </Form>

        <StyledLink to="/signin">Sign in</StyledLink>
      </Wrapper>

      {displayErrorModal && (
        <AlertModal
          closingFunction={() => setDisplayErrorModal(false)}
          message="We could not create your account."
          variant="error"
        />
      )}
    </>
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signUp(email, password).catch(() => {
      setDisplayErrorModal(true);
    });
  }
};

export default SignUp;
