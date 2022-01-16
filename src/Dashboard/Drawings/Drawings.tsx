import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Button from 'shared/components/Button/Button';
import Icon from 'shared/components/Icon/Icon';

import {
  Wrapper,
  Drawing,
  StyledLink,
  Details,
  Title,
} from './Styles';

const Drawings:FC = () => (
  <Wrapper>
    <Link to="/editor">
      <Button icon="plusCircle" variant="primary">New drawing</Button>
    </Link>

    <div>
      <Drawing>
        <StyledLink to="/editor">
          <Details>
            <Icon variant="file" size="1em" />
            <Title>Drawing #5</Title>
          </Details>
        </StyledLink>

        <Button
          disabled
          icon="moreHorizontal"
          variant="empty"
        />
      </Drawing>
    </div>
  </Wrapper>
);

export default Drawings;
