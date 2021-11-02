import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
  html {
    min-height: 20rem;
  }

  body {
    background: #161616;
    min-height: 20rem;
  }

  #root {
    min-height: 20rem;
  }
`;

export default BaseStyles;
