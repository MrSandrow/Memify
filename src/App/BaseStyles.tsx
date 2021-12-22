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
  
  html, 
  body, 
  #root {
    height: 100%;
    min-height: 100%;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }

  #root {
    background: black;
  }
`;

export default BaseStyles;
