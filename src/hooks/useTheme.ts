import { useEffect, useState } from 'react';

import { DefaultTheme } from 'styled-components';

import { lightTheme, darkTheme } from '../themes';

/**
 * Custom hook for detecting local theme mode.
 * Detects system default color scheme and stores it in the local storage.
 * Stored value is updated when mode changed.
 *
 * @returns [theme, toggleTheme] - theme is the current theme object, toggleTheme is a function to toggle the theme.
 */
export const useTheme = (): [DefaultTheme, () => void] => {
  const getSystemDefaultMode = (): string =>
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  const [themeMode, setThemeMode] = useState<string>(getSystemDefaultMode);
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const setLocalMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setThemeMode(mode);
  };

  const toggleTheme = () => {
    if (themeMode === 'light') {
      setLocalMode('dark');
    } else {
      setLocalMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setThemeMode(localTheme);
    }
  }, []);

  useEffect(() => {
    setTheme(themeMode === 'light' ? lightTheme : darkTheme);
  }, [themeMode]);

  return [theme, toggleTheme];
};
