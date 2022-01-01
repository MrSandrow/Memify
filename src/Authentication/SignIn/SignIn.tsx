import React, { FC, useState, FormEvent } from 'react';

import useAuth from 'shared/hooks/useAuth';
import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Logo from 'shared/components/Logo/Logo';
import AlertModal from 'shared/components/AlertModal/AlertModal';

import {
  Wrapper,
  Form,
  Links,
  StyledLink,
  Divider,
} from './Styles';

const SignIn:FC = () => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('a@a.com');
  const [password, setPassword] = useState('aaaaaa');
  const [displayErrorModal, setDisplayErrorModal] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    signIn(email, password).catch(() => {
      setDisplayErrorModal(true);
    });
  };

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

        <Links>
          <StyledLink to="../signup">Sign up</StyledLink>
          <Divider />
          <StyledLink to="../resetpassword">Reset password</StyledLink>
        </Links>
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
};

export default SignIn;
