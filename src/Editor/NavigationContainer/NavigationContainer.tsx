import React, { FC } from 'react';
import styled from 'styled-components';

import MenuButton from './MenuButton/MenuButton';
import SaveButton from './SaveButton/SaveButton';

const Container = styled.div`
  align-items: center;
  background: #292929;
  border-radius: 0 0 0.25rem 0.25rem;
  color: #dddddd;
  display: flex;
  font-size: 1.45rem;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

const Title = styled.span`
  font-family: 'Museo';
  font-size: 1.1em;
`;

const NavigationContainer:FC = () => (
  <Container>
    <MenuButton />
    <Title>memify</Title>
    <SaveButton />
  </Container>
);

export default NavigationContainer;
