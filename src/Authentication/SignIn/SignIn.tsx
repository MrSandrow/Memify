import React, { FC, useState, FormEvent } from 'react';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Logo from 'shared/components/Logo/Logo';
import AlertModal from 'shared/components/AlertModal/AlertModal';

import useSignIn from './useSignIn';

import { Wrapper, Form, StyledLink } from './Styles';

const SignIn:FC = () => {
  const { signIn } = useSignIn();

  const [email, setEmail] = useState('demo@demo.com');
  const [password, setPassword] = useState('demooo');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  return (
    <>
      <Wrapper>
        <Logo size="2.5em" />

        <Form onSubmit={handleSubmit}>
          <Input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            required
            type="email"
            value={email}
          />
          <Input
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            required
            type="password"
            value={password}
          />
          <Button type="submit" variant="primary">Sign in</Button>
        </Form>

        <StyledLink to="/signup">Sign up</StyledLink>
      </Wrapper>

      {displayErrorModal && (
        <AlertModal
          closingFunction={() => setDisplayErrorModal(false)}
          message="We could not sign you in."
          variant="error"
        />
      )}
    </>
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    signIn(email, password).catch(() => {
      setDisplayErrorModal(true);
    });
  }
};

export default SignIn;
