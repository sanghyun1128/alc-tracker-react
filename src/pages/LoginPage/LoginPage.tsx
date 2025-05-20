import React from 'react';

import { styled } from 'styled-components';

import { LoginForm } from '../../components';
import { useTheme } from '../../hooks/useTheme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export default function LoginPage() {
  const [theme] = useTheme();

  return (
    <Container>
      <LoginForm theme={theme} />
    </Container>
  );
}
