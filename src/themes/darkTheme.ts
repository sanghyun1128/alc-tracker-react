import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  alt: 'dark',
  borderRadius: '5px',
  margin: '10px',
  transition: '0.3s ease-in-out',

  colors: {
    background: '#222831',
    componentBackground: '#000000',

    primary: '#F1A661',
    primaryOn: '#FFD8A9',
    secondary: '#eeeeee',
    secondaryOn: '#dddddd',
    warning: '#e63946',

    textDark: '#f1faee',
    textLight: '#023047',

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
