import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 0;
  }
  
  html {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
  }
  
  body {
    height: 100%;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  #root {
    height: 100%;
  }
`;

export default BaseStyles;
