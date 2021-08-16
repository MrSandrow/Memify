import React, { FC } from 'react';
import styled from 'styled-components';
import { Menu2 } from '@styled-icons/remix-line/Menu2';

const MenuIcon = styled(Menu2)`
  cursor: pointer;
`;

const MenuButton:FC = () => (
  <MenuIcon size="1.4em" title="Menu" />
);

export default MenuButton;
