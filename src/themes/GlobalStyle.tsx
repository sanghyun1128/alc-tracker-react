import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .fade-btn-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .fade-btn-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 200ms, transform 200ms;
  }
  .fade-btn-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-btn-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 200ms, transform 200ms;
  }
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
