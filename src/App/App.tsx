import React, { FC } from 'react';

import FontStyles from './FontStyles';
import BaseStyles from './BaseStyles';

import Authentication from '../Authentication/Authentication';

const App: FC = () => (
  <>
    <FontStyles />
    <BaseStyles />
    <Authentication />
  </>
);

export default App;
