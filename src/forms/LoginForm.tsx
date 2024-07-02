import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { fadeInUp } from '../animations/basicAnimations';
import InformationInput from '../components/InformationInput';
import InformationLabel from '../components/InformationLabel';
import SubmitButton from '../components/SubmitButton';
import TextButton from '../components/TextButton';
import { deviceSizes } from '../const/deviceSizes';
import { emailValidation } from '../validation';
import { passwordValidation } from '../validation/passwordValidation';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;
  justify-items: stretch;
  height: 400px;
  border-radius: ${props => props.theme.formBorderRadius};
  background-color: ${props => props.theme.colors.formBackground};

  animation: ${fadeInUp} 1.3s;

  ${deviceSizes.small} {
    width: 250px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.medium} {
    width: 400px;
    padding: 50px 50px 0px 50px;
  }
  ${deviceSizes.large} {
    width: 500px;
    padding: 50px 50px 0px 50px;
  }
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
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsEmailError(false);
  };

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setIsPasswordError(false);
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
      <InformationLabel
        text="Email"
        textSize="1.5rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 6"
        gridRow="1 / 2"
      />
      <InformationInput
        type="email"
        placeholder="abcd1234@email.com"
        maxLength={254}
        gridColumn="1 / 6"
        gridRow="2 / 3"
        isError={isEmailError}
        onChange={event => emailChange(event)}
      />
      <InformationLabel
        text="Password"
        textSize="1.5rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 6"
        gridRow="3 / 4"
      />
      <InformationInput
        type={showPassword ? 'text' : 'password'}
        placeholder=". . . . . . . . . ."
        maxLength={20}
        gridColumn="1 / 6"
        gridRow="4 / 5"
        isError={isPasswordError}
        onChange={event => passwordChange(event)}
      />
      <TextButton
        text={showPassword ? 'Hide' : 'Show'}
        textSize=""
        textColor={theme.colors.primary}
        gridColumn="5 / 6"
        gridRow="4 / 5"
        justifyContent="center"
        onClick={togglePasswordVisibility}
      />
      <TextButton
        text="Forgot Password?"
        textSize=""
        textColor={theme.colors.secondary}
        gridColumn="1 / 3"
        gridRow="6 / 7"
        justifyContent="flex-start"
        onClick={() => navigate('/forgot-password')}
      />
      <TextButton
        text="Register"
        textSize=""
        textColor={theme.colors.secondary}
        gridColumn="5 / 6"
        gridRow="6 / 7"
        justifyContent="flex-end"
        onClick={() => navigate('/register')}
      />
      <SubmitButton text="Log In" gridColumn="2 / 5" gridRow="5 / 6" />
    </Form>
  );
}
