import styled from 'styled-components';

import { color } from 'shared/utils/styles';

export const Wrapper = styled.div`
  border: 0.15em solid ${color.accentPrimary};
  border-radius: 0.5em;
  color: ${color.accentPrimary};
  display: flex;
  font-size: 1.25em;
  gap: 0.5em;
  height: 2.4em;
  overflow: hidden;
  padding: 0 0.5em;
  width: 100%;
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  height: 100%;
  width: 100%;
`;
