import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
    font-family:
    system-ui,
    -apple-system,
    system-ui,
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
