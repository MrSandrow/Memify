import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { color } from 'shared/utils/styles';

export const Wrapper = styled.div`
  display: grid;
  gap: 1.5em;
  grid-template-rows: auto 1fr;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Message = styled.span`
  margin: auto;
`;

export const Drawing = styled.div`
  align-items: center;
  border-radius: 0.5em;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto;
  overflow: hidden;
  transition: all 0.1s;
  width: 100%;

  &:hover {
    background: ${color.backgroundLight};
  }
`;

export const StyledLink = styled(Link)`
  height: 100%;
  width: 100%;
`;

export const Details = styled.div`
  align-items: center;
  display: grid;
  gap: 0.75em;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  height: 100%;
  padding: 0 0.5em 0 0.75em;
  width: 100%;
`;

export const Title = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
