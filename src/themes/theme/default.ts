// types
import { PaletteThemeProps } from 'types/theme';
import { PalettesProps } from '@ant-design/colors';
import { PaletteColorOptions } from '@mui/material/styles';

// ==============================|| PRESET THEME - DEFAULT ||============================== //

export default function Default(colors: PalettesProps): PaletteThemeProps {
  const { red, gold, cyan, green, grey } = colors;
  const greyColors: PaletteColorOptions = {
  0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16]
  };
  const contrastText = '#fff';
    

  const activeColor = [
    '#FFFFFF',
    '#F2F2F2',
    '#E6E6E6',
    '#D9D9D9',
    '#CCCCCC',
    '#BFBFBF',
    '#B3B3B3',
    '#A6A6A6',
    '#999999',
    '#808080',
  ];

  return {
    primary: {
      lighter: activeColor[0],
      100: activeColor[1],
      200: activeColor[2],
      light: activeColor[3],
      400: activeColor[4],
      main: activeColor[5],
      dark: activeColor[6],
      700: activeColor[7],
      darker: activeColor[8],
      900: activeColor[9],
      contrastText
    },
    secondary: {
      lighter: greyColors[100],
      100: greyColors[100],
      200: greyColors[200],
      light: greyColors[300],
      400: greyColors[400],
      main: greyColors[500]!,
      600: greyColors[600],
      dark: greyColors[700],
      800: greyColors[800],
      darker: greyColors[900],
      A100: greyColors[0],
      A200: greyColors.A400,
      A300: greyColors.A700,
      contrastText: greyColors[0]
    },
    error: {
      lighter: red[0],
      light: red[2],
      main: red[4],
      dark: red[7],
      darker: red[9],
      contrastText
    },
    warning: {
      lighter: gold[0],
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      darker: gold[9],
      contrastText: greyColors[100]
    },
    info: {
      lighter: cyan[0],
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      darker: cyan[9],
      contrastText
    },
    success: {
      lighter: green[0],
      light: green[3],
      main: green[5],
      dark: green[7],
      darker: green[9],
      contrastText
    },
    grey: greyColors
  };
}
