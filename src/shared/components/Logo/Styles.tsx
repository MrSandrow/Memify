import styled from 'styled-components';

import { font } from '../../utils/styles';

interface StyledSpanProps {
  size: string;
}

const StyledSpan = styled.span<StyledSpanProps>`
  cursor: default;
  font-family: ${font.logo};
  font-size: ${(props) => props.size};
  height: 120%;
  line-height: 90%;
  margin: auto;
  user-select: none;
`;

export default StyledSpan;
