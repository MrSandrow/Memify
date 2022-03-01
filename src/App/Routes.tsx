import React, { FC } from 'react';
import { Routes as RoutesWrapper, Route, Navigate } from 'react-router-dom';

import useCurrentUser from 'shared/hooks/useCurrentUser';

import Authentication from '../Authentication/Authentication';
import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';

import Dashboard from '../Dashboard/Dashboard';
import Drawings from '../Dashboard/Drawings/Drawings';

import Editor from '../Editor/Editor';

const Routes:FC = () => {
  const { currentUser } = useCurrentUser();

  return (
    <>
      {currentUser ? (
        <RoutesWrapper>
          <Route path="*" element={<Navigate replace to="drawings" />} />

          <Route element={<Dashboard />}>
            <Route path="drawings" element={<Drawings />} />
          </Route>

          <Route path="editor/:id" element={<Editor />} />
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
