import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-text: ${props => props.theme.colors.text};
    --color-text-reverse: ${props => props.theme.colors.textReverse};
    --color-primary: ${props => props.theme.colors.primary};
    --color-secondary: ${props => props.theme.colors.secondary};
    --color-success: ${props => props.theme.colors.success};
    --color-warning: ${props => props.theme.colors.warning};
  }

  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    color: var(--color-text);
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
