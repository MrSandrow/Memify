import { createGlobalStyle } from 'styled-components';

import montserratRegular from 'shared/fonts/Montserrat-Regular.ttf';
import montserratBold from 'shared/fonts/Montserrat-Bold.ttf';
import museoBold from 'shared/fonts/Museo-Bold.ttf';

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
