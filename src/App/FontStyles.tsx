import { createGlobalStyle } from 'styled-components';

import montserratRegular from './fonts/Montserrat-Regular.ttf';
import montserratBold from './fonts/Montserrat-Bold.ttf';
import museoBold from './fonts/Museo-Bold.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: url(${montserratRegular});
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    src: url(${montserratBold});
  }

  @font-face {
    font-family: 'Museo';
    font-weight: 700;
    src: url(${museoBold});
  }
`;

export default FontStyles;
