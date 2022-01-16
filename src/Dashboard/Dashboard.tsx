import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';
import Navbar from 'shared/components/Navbar/Navbar';
import Button from 'shared/components/Button/Button';

import { Wrapper, OutletWrapper } from './Styles';

const Dashboard:FC = () => {
  const { signOut } = useAuth();

  return (
    <Wrapper>
      <Navbar
        renderLeftButton={() => (
          <Button
            disabled
            icon="menu"
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

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Wrapper>
  );
};

export default Dashboard;
