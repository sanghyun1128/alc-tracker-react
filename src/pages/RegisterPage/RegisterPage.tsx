import React from 'react';

import { RegisterForm } from '../../components';
import { useTheme } from '../../hooks/useTheme';

export default function RegisterPage() {
  const [theme] = useTheme();

  return <RegisterForm theme={theme} />;
}
