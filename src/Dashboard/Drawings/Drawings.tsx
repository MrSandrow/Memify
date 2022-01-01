import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Button from 'shared/components/Button/Button';

import Drawing from '../Drawing/Drawing';
import Wrapper from './Styles';

const Drawings:FC = () => (
  <Wrapper>
    <Link to="/editor">
      <Button icon="plusCircle" variant="primary">New drawing</Button>
    </Link>

    <div>
      <Drawing />
    </div>
  </Wrapper>
);

export default Drawings;
