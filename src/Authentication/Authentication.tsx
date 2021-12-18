import React, { FC } from 'react';

import Wrapper from './Styles';
import Button from '../shared/components/Button/Button';
import Logo from '../shared/components/Logo/Logo';
import Icon from '../shared/components/Icon/Icon';
import Input from '../shared/components/Input/Input';

const Authentication:FC = () => (
  <Wrapper>
    <Logo size="2.5em" />
    <Button variant="empty">
      <Icon variant="menu" size="1.75em" />
    </Button>
    <Input placeholder="Email" type="email" />
    <Input placeholder="Password" type="password" />
    <Button variant="primary">
      <Icon variant="login" size="1.5em" />
      Create an account
    </Button>
    <Button variant="danger">
      <Icon variant="logout" size="1.5em" />
      Create an account
    </Button>
    <Button variant="secondary">
      <Icon variant="download" size="1.5em" />
      Create an account
    </Button>
  </Wrapper>
);

export default Authentication;
