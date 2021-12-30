import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from 'shared/utils/styles';

export const Wrapper = styled.div`
  display: grid;
  gap: 2.5em;
`;

export const Form = styled.form`
  display: grid;
  gap: 1em;
`;

export const Links = styled.div`
  display: grid;
  gap: 0.75em;
`;

export const StyledLink = styled(Link)`
  justify-self: center;
`;

export const Divider = styled.div`
  background: ${color.accentPrimary};
  border-radius: 0.5em;
  height: 0.2em;
  justify-self: center;
  width: 1.5em;
`;
