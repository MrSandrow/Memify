import Color from 'color';

export const color = {
  backgroundPrimary: '#000000', // Black
  backgroundSecondary: '#232324', // Dark Grey
  backgroundLight: '#64646452', // Light Grey

  accentPrimary: '#ffffff', // White
  accentSecondary: '#bbbbbb', // Light Grey

  buttonPrimary: '#0020d6', // Blue
  buttonSecondary: '#535353', // Grey
  buttonDanger: '#9b0606', // Red
};

export const font = {
  primary: '\'Montserrat\', sans-serif;',
  logo: '\'Museo\', monospace;',
};

export const zIndexValues = {
  modal: 1,
};

export const mixin = {
  lighten: (colorValue: string, amount: number) => (
    Color(colorValue).lighten(amount).string()
  ),

  darken: (colorValue: string, amount: number) => (
    Color(colorValue).darken(amount).string()
  ),
};
