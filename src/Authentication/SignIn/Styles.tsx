import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  gap: 2.5em;
`;

export const Form = styled.form`
  display: grid;
  gap: 1em;
`;

export const StyledLink = styled(Link)`
  justify-self: center;
`;
