import React, { FC } from 'react';

import FontStyles from './FontStyles';
import BaseStyles from './BaseStyles';
import ScrollWrapper from './Styles';
import Routes from './Routes';

const App: FC = () => (
  <>
    <FontStyles />
    <BaseStyles />
    <ScrollWrapper>
      <Routes />
    </ScrollWrapper>
  </>
);

export default App;
