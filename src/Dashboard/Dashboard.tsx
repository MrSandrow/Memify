import React, { FC } from 'react';

import useAuth from 'shared/hooks/useAuth';
import Navbar from 'shared/components/Navbar/Navbar';
import Button from 'shared/components/Button/Button';

import Wrapper from './Styles';

const Dashboard:FC = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Navbar
        renderLeftButton={() => (
          <Button
            icon="menu"
            isNotImplemented
            variant="empty"
          />
        )}
        renderRightButton={() => (
          <Button
            icon="logout"
            onClick={() => signOut()}
            variant="empty"
          />
        )}
      />

      <div />
    </Wrapper>
  );
};

export default Dashboard;
