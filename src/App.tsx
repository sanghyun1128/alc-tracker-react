import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavigationBar from './components/navigation/NavigationBar';
import { useTheme } from './hooks/useTheme';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import { GlobalStyle } from './themes';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <NavigationBar theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
