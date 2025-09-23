import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  alt: 'light',
  borderRadius: '5px',
  margin: '10px',
  gap: '10px',
  padding: '10px',
  transition: '0.2s ease-in-out',
  hoverFilter: 'brightness(0.88)',
  focusBoxShadow: '0 0 0 3px #F1A661',

  colors: {
    dim: 'rgba(0, 0, 0, 0.6)',

    background: '#FDEEDC',
    componentBackground: '#ffffff',
    inputBackground: '#FDEEDC',

    primary: '#F1A661',
    secondary: '#eeeeee',
    success: '#06d6a0',
    warning: '#e63946',
    text: '#023047',
    textReverse: '#f1faee',

    wineWhite: '#C70039',
    wineWhiteOn: '#900C3F',
    wineRed: '#C70039',
    wineRedOn: '#900C3F',
    whiskey: '#6f523b',
    whiskeyOn: '#b76935',
    cocktail: '#00b4d8',
    cocktailOn: '#90e0ef',
  },
};
