import React, { FC } from 'react';

import Button from 'shared/components/Button/Button';
import Icon from 'shared/components/Icon/Icon';

import {
  Wrapper,
  StyledLink,
  Details,
  Title,
} from './Styles';

const Drawing:FC = () => (
  <Wrapper>
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
  </Wrapper>
);

export default Drawing;
