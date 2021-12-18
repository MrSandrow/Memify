import React, { FC } from 'react';
import {
  Download,
  LogIn,
  LogOut,
  Menu,
  Search,
  Trash,
  User,
} from '@styled-icons/feather';

import Wrapper from './Styles';

const icons = {
  download: Download,
  login: LogIn,
  logout: LogOut,
  menu: Menu,
  search: Search,
  trash: Trash,
  user: User,
};

interface Props {
  variant: keyof typeof icons;
  size: string;
  title?: string;
}

const Icon:FC<Props> = ({ variant, size, title }) => {
  const IconVariant = icons[variant];

  return (
    <Wrapper>
      <IconVariant size={size} title={title} />
    </Wrapper>
  );
};

export default Icon;
