import React, { FC } from 'react';
import styled from 'styled-components';
import { Menu } from '@styled-icons/feather';

const MenuIcon = styled(Menu)`
  cursor: pointer;
`;

const MenuButton:FC = () => (
  <MenuIcon size="1.6em" title="Menu" />
);

export default MenuButton;
