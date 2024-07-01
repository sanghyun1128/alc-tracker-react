import React from 'react';

import { styled } from 'styled-components';

import LoginForm from '../forms/LoginForm';
import { useTheme } from '../hooks/useTheme';

const Container = styled.div`
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
`;

export default function LoginPage() {
  const [theme] = useTheme();

  return (
    <Container theme={theme}>
      <LoginForm theme={theme} />
    </Container>
  );
}
