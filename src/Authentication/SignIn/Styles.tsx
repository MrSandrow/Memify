import styled from 'styled-components';

import { color } from 'shared/utils/styles';

export const Wrapper = styled.div`
  display: grid;
  gap: 2.5em;
  text-align: center;
`;

export const Form = styled.form`
  display: grid;
  gap: 1em;
`;

export const Links = styled.div`
  display: grid;
  gap: 0.75em;
`;

export const Divider = styled.div`
  background: ${color.accentPrimary};
  border-radius: 0.5em;
  height: 0.2em;
  margin: auto;
  width: 1.5em;
`;
