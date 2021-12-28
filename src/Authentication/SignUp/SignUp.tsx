import React, { FC, useState } from 'react';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Logo from 'shared/components/Logo/Logo';

import { Wrapper, Form } from './Styles';

const SignUp:FC = () => {
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
        <Button variant="primary">Sign Up</Button>
      </Form>

      <span>Sign in</span>
    </Wrapper>
  );
};

export default SignUp;
