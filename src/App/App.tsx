import React, { FC } from 'react';

import Authentication from '../Authentication/Authentication';

import FontStyles from './FontStyles';
import BaseStyles from './BaseStyles';
import Wrapper from './Styles';

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
