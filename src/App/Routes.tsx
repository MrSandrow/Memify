import React, { FC } from 'react';
import { Routes as RoutesWrapper, Route, Navigate } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';

import Authentication from '../Authentication/Authentication';
import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';
import ResetPassword from '../Authentication/ResetPassword/ResetPassword';

import Dashboard from '../Dashboard/Dashboard';

const Routes:FC = () => {
  const { getUser } = useAuth();

  return (
    <>
      {getUser() ? (
        <RoutesWrapper>
          <Route path="*" element={<Navigate replace to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />
        </RoutesWrapper>
      ) : (
        <RoutesWrapper>
          <Route path="*" element={<Navigate replace to="signin" />} />

          <Route element={<Authentication />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>
        </RoutesWrapper>
      )}
    </>
  );
};

export default Routes;
