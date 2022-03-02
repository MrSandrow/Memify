import { css } from 'styled-components';

import { color, mixin } from 'shared/utils/styles';

const getColoredButton = (colorValue: string) => css`
  background: ${colorValue};

  &:hover {
    background: ${mixin.lighten(colorValue, 0.3)};
  }
`;

const getEmptyButton = (colorValue: string) => css`
  background: none;

  &:hover {
    background: ${colorValue};
  }
`;

const buttonVariants = {
  primary: getColoredButton(color.buttonPrimary),
  secondary: getColoredButton(color.buttonSecondary),
  danger: getColoredButton(color.buttonDanger),
  empty: getEmptyButton(color.backgroundLight),
};

export default buttonVariants;
