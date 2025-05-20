import React from 'react';

import { styled } from 'styled-components';

import { RegisterForm } from '../../components';
import { useTheme } from '../../hooks/useTheme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

export default function RegisterPage() {
  const [theme] = useTheme();

  return (
    <Container>
      <RegisterForm theme={theme} />
    </Container>
  );
}
