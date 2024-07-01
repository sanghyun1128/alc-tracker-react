import React, { useState } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { fadeInUp } from '../animations/basicAnimations';
import InformationInput from '../components/InformationInput';
import InformationLabel from '../components/InformationLabel';
import SubmitButton from '../components/SubmitButton';
import { deviceSizes } from '../const/deviceSizes';
import { emailValidation } from '../validation';
import { passwordValidation } from '../validation/passwordValidation';

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

//TODO: Password 암호화해서 서버로 전송하기
export default function LoginForm({ theme }: LoginFormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailValidation(email)) {
      console.log('Email is valid');
      setIsEmailError(false);
    } else {
      console.log('Email is invalid');
      setIsEmailError(true);
    }

    if (passwordValidation(password)) {
      console.log('Password is valid');
      setIsPasswordError(false);
    } else {
      console.log('Password is invalid');
      setIsPasswordError(true);
    }
  };

  return (
    <Form theme={theme} onSubmit={event => submitForm(event)}>
      <InformationLabel text="Email" gridColumn="1 / 6" gridRow="1 / 2" />
      <InformationInput
        type="email"
        maxLength={254}
        gridColumn="1 / 6"
        gridRow="2 / 3"
        isError={isEmailError}
        onChange={event => setEmail(event.target.value)}
      />
      <InformationLabel text="Password" gridColumn="1 / 6" gridRow="3 / 4" />
      <InformationInput
        type={showPassword ? 'text' : 'password'}
        maxLength={20}
        gridColumn="1 / 6"
        gridRow="4 / 5"
        isError={isPasswordError}
        onChange={event => setPassword(event.target.value)}
      />
      <ToggleButton type="button" onClick={togglePasswordVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </ToggleButton>
      <SubmitButton text="Log In" gridColumn="2 / 5" gridRow="5 / 6" />
    </Form>
  );
}
