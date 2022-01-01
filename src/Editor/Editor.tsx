import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'shared/components/Navbar/Navbar';
import Button from 'shared/components/Button/Button';

import Wrapper from './Styles';

const Editor:FC = () => (
  <Wrapper>
    <Navbar
      renderLeftButton={() => (
        <Link to="/dashboard">
          <Button
            icon="arrowLeftCircle"
            variant="empty"
          />
        </Link>
      )}
      renderRightButton={() => (
        <Button
          icon="save"
          isNotImplemented
          variant="empty"
        />
      )}
    />

    <div />
  </Wrapper>
);

export default Editor;
