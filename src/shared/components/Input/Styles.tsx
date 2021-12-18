import styled from 'styled-components';

import { color } from '../../utils/styles';

export const Wrapper = styled.div`
  border: solid 0.15em ${color.accentPrimary};
  border-radius: 0.5em;
  display: grid;
  font-size: 1.25em;
  gap: 0.5em;
  grid-auto-flow: column;
  overflow: hidden;
  padding: 0.5em;
  width: 100%;
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  color: inherit;
  font-size: 1em;
  height: 100%;
  width: 100%;
`;
