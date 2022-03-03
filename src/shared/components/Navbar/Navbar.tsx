import React, { FC, ReactElement } from 'react';

import Logo from 'shared/components/Logo/Logo';

import Wrapper from './Styles';

interface Props {
  renderLeftButton: () => ReactElement;
  renderRightButton: () => ReactElement;
}

const Navbar:FC<Props> = ({ renderLeftButton, renderRightButton }) => (
  <Wrapper>
    {renderLeftButton()}
    <Logo size="1.5em" />
    {renderRightButton()}
  </Wrapper>
);

export default Navbar;
