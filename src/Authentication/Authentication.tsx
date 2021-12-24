import React, { FC } from 'react';

import Button from 'shared/components/Button/Button';
import Logo from 'shared/components/Logo/Logo';
import Icon from 'shared/components/Icon/Icon';
import Input from 'shared/components/Input/Input';

import Wrapper from './Styles';

const Authentication:FC = () => (
  <Wrapper>
    <Logo size="2.5em" />

    <div style={{ display: 'flex', gap: '1em' }}>
      <Input
        placeholder="Email"
        required
        type="email"
      />

      <Button
        renderIcon={(size) => <Icon variant="menu" size={size} />}
        variant="empty"
      />
    </div>

    <Input
      placeholder="Password"
      renderIcon={(size) => <Icon variant="search" size={size} />}
      required
      type="password"
    />

    <Button
      renderIcon={(size) => <Icon variant="login" size={size} />}
      variant="primary"
    >
      Create an account
    </Button>

    <Button
      renderIcon={(size) => <Icon variant="logout" size={size} />}
      variant="danger"
    >
      Create an account
    </Button>

    <Button
      renderIcon={(size) => <Icon variant="download" size={size} />}
      variant="secondary"
    >
      Create an account
    </Button>
  </Wrapper>
);

export default Authentication;
