import React, { FC } from 'react';
import styled from 'styled-components';
import { Menu } from '@styled-icons/feather';

const MenuIcon = styled(Menu)`
  cursor: pointer;
  
  @media (hover: hover) {
    &:hover {
      color: #8f8f8f;
    }
  }
`;

const MenuButton:FC = () => (
  <MenuIcon size="1.6em" title="Menu" />
);

export default MenuButton;
