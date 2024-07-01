import React, { useState } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { fadeInUp } from '../animations/basicAnimations';
import InformationInput from '../components/InformationInput';
import InformationLabel from '../components/InformationLabel';
import SubmitButton from '../components/SubmitButton';
import { deviceSizes } from '../const/deviceSizes';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
  align-items: center;
  justify-items: stretch;
  height: 400px;
  border-radius: ${props => props.theme.formBorderRadius};
  background-color: ${props => props.theme.colors.formBackground};

  animation: ${fadeInUp} 1.5s;

  ${deviceSizes.small} {
    width: 250px;
    padding: 20px;
  }
  ${deviceSizes.medium} {
    width: 400px;
    padding: 50px;
  }
  ${deviceSizes.large} {
    width: 500px;
    padding: 50px;
  }
`;

const ToggleButton = styled.button`
  grid-column: 5 / 6;
  grid-row: 4 / 5;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`;

interface LoginFormProps {
  theme: DefaultTheme;
}

export default function LoginForm({ theme }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <Form theme={theme}>
      <InformationLabel text="Email" gridcolumn="1 / 6" gridrow="1 / 2" />
      <InformationInput type="email" gridcolumn="1 / 6" gridrow="2 / 3" />
      <InformationLabel text="Password" gridcolumn="1 / 6" gridrow="3 / 4" />
      <InformationInput
        type={showPassword ? 'text' : 'password'}
        gridcolumn="1 / 6"
        gridrow="4 / 5"
      />
      <ToggleButton type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </ToggleButton>
      <SubmitButton text="Log In" gridcolumn="2 / 5" gridrow="5 / 6" />
    </Form>
  );
}
