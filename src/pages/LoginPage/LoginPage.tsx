import React from 'react';

import { LoginForm } from '../../components';
import { useTheme } from '../../hooks/useTheme';

export default function LoginPage() {
  const [theme] = useTheme();

  return <LoginForm theme={theme} />;
}
