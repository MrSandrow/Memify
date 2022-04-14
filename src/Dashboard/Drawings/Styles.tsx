import styled from 'styled-components';

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
