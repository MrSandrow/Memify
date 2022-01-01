import React, { FC } from 'react';

import ScrollWrapper from 'shared/components/ScrollWrapper/ScrollWrapper';

import FontStyles from './FontStyles';
import BaseStyles from './BaseStyles';
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
