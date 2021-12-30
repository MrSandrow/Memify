import React, { FC } from 'react';
import { Routes as RoutesWrapper, Route, Navigate } from 'react-router-dom';

import Authentication from '../Authentication/Authentication';
import SignIn from '../Authentication/SignIn/SignIn';
import SignUp from '../Authentication/SignUp/SignUp';
import ResetPassword from '../Authentication/ResetPassword/ResetPassword';

const Routes:FC = () => (
  <RoutesWrapper>
    <Route path="*" element={<Navigate replace to="signin" />} />

    <Route element={<Authentication />}>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="resetpassword" element={<ResetPassword />} />
    </Route>
  </RoutesWrapper>
);

export default Routes;
