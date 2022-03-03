import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Wrapper from './Styles';

const Authentication:FC = () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
);

export default Authentication;
