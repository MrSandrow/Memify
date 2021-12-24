import React, { FC } from 'react';

import icons from 'shared/services/icons';

import Wrapper from './Styles';

interface Props {
  size: string;
  title?: string;
  variant: keyof typeof icons;
}

const Icon:FC<Props> = ({ size, title, variant }) => {
  const IconVariant = icons[variant];

  return (
    <Wrapper>
      <IconVariant size={size} title={title} />
    </Wrapper>
  );
};

export default Icon;
