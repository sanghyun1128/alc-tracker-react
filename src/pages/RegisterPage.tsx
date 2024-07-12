import React from 'react';

import RegisterForm from '../forms/RegisterForm';
import { useTheme } from '../hooks/useTheme';

export default function RegisterPage() {
  const [theme] = useTheme();

  return <RegisterForm theme={theme} />;
}
