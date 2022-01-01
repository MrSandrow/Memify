import React, { FC } from 'react';
import { Routes as RoutesWrapper, Route, Navigate } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';

import Authentication from '../Authentication/Authentication';
import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';

import Dashboard from '../Dashboard/Dashboard';

import Editor from '../Editor/Editor';

const Routes:FC = () => {
  const { getUser } = useAuth();

  return (
    <>
      {getUser() ? (
        <RoutesWrapper>
          <Route path="*" element={<Navigate replace to="dashboard" />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="editor" element={<Editor />} />
        </RoutesWrapper>
      ) : (
        <RoutesWrapper>
          <Route path="*" element={<Navigate replace to="signin" />} />

          <Route element={<Authentication />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </RoutesWrapper>
      )}
    </>
  );
};

export default Routes;
