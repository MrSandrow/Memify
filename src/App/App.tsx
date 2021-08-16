import React, { FC } from 'react';

import FontStyles from './FontStyles';
import BaseStyles from './BaseStyles';
import Editor from '../Editor/Editor';

const App: FC = () => (
  <>
    <FontStyles />
    <BaseStyles />
    <Editor />
  </>
);

export default App;
