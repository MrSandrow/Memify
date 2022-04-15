import styled from 'styled-components';

import Button from 'shared/components/Button/Button';

export const StyledButton = styled(Button)`
  border-radius: 0;
  display: flex;
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 1.5em;
  justify-items: center;
  text-align: center;
`;

export const Buttons = styled.div`
  display: grid;
  gap: 0.75em;
  width: 100%;
`;
