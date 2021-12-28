import React, { FC, useState } from 'react';

import Button from 'shared/components/Button/Button';
import Input from 'shared/components/Input/Input';
import Logo from 'shared/components/Logo/Logo';

import { Wrapper, Form } from './Styles';

const ResetPassword:FC = () => {
  const [email, setEmail] = useState('');

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
        <Button variant="primary">Reset password</Button>
      </Form>

      <span>Cancel</span>
    </Wrapper>
  );
};

export default ResetPassword;
