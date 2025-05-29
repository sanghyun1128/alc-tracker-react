import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  alt: 'light',
  borderRadius: '5px',
  margin: '10px',
  gap: '10px',
  padding: '10px',
  transition: '0.3s ease-in-out',

  colors: {
    background: '#FDEEDC',
    componentBackground: '#ffffff',

    primary: '#F1A661',
    primaryOn: '#FFD8A9',
    secondary: '#eeeeee',
    secondaryOn: '#dddddd',
    warning: '#e63946',

    textDark: '#023047',
    textLight: '#f1faee',

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
