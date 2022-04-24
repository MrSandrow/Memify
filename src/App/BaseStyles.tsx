import { createGlobalStyle } from 'styled-components';

import { color, font } from 'shared/utils/styles';

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

  a {
    color: inherit;
    display: inline-flex;
    text-decoration: none;
  }

  html {
    background: ${color.backgroundPrimary};
    color: ${color.accentPrimary};
    font-family: ${font.primary};
  }
`;

export default BaseStyles;
