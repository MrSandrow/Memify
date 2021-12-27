import React, { FC } from 'react';

import FontStyles from './FontStyles';
import BaseStyles from './BaseStyles';
import Wrapper from './Styles';

import Authentication from '../Authentication/Authentication';

const App: FC = () => (
  <>
    <FontStyles />
    <BaseStyles />
    <Wrapper>
      <Authentication />
    </Wrapper>
  </>
);

export default App;
