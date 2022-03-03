import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface StyledSpanProps {
  size: string;
}

export const StyledSpan = styled.span<StyledSpanProps>`
  cursor: default;
  font-family: ${font.logo};
  font-size: ${(props) => props.size};
  /* height: 120%; */
  /* line-height: 90%; */
  user-select: none;
`;
