import React, { FC, useState } from 'react';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Logo from 'shared/components/Logo/Logo';

import {
  Wrapper,
  Form,
  Links,
  Divider,
} from './Styles';

const SignIn:FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper>
      <Logo size="2.5em" />

      <Form>
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
        <Button variant="primary">Sign in</Button>
      </Form>

      <Links>
        <span>Sign up</span>
        <Divider />
        <span>Reset password</span>
      </Links>
    </Wrapper>
  );
};

export default SignIn;
