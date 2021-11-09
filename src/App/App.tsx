import React, { FC } from 'react';

import FontStyles from './FontStyles';
import ResetStyles from './ResetStyles';
import Editor from '../Editor/Editor';

const App: FC = () => (
  <>
    <FontStyles />
    <ResetStyles />
    <Editor />
  </>
);

export default App;
