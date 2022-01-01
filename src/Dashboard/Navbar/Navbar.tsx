import React, { FC } from 'react';

import useAuth from 'shared/hooks/useAuth';
import Logo from 'shared/components/Logo/Logo';
import Button from 'shared/components/Button/Button';

import Wrapper from './Styles';

const Navbar:FC = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Button
        icon="menu"
        isNotImplemented
        variant="empty"
      />

      <Logo size="1.5em" />

      <Button
        icon="logout"
        onClick={() => signOut()}
        variant="empty"
      />
    </Wrapper>
  );
};

export default Navbar;
