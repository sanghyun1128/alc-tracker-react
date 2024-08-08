import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { InformationInput, SubmitButton, TextButton } from '..';
import { fadeInBottomToCenter } from '../../animations/basicAnimations';
import { FormStyle } from '../../styles';
import { emailValidation, passwordValidation } from '../../validation';

const Form = styled(FormStyle)`
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1.5fr) repeat(2, 1fr);
  height: 450px;

  animation: ${fadeInBottomToCenter} 1.3s;
`;

interface LoginFormProps {
  theme: DefaultTheme;
}

//TODO: Password 암호화해서 서버로 전송하기
export default function LoginForm({ theme }: LoginFormProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isPasswordError, setIsPasswordError] = useState<boolean>(false);
  const navigate = useNavigate();

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
    <Form onSubmit={event => submitForm(event)}>
      <InformationInput
        placeholder="Email"
        maxLength={254}
        gridColumn="1 / 6"
        gridRow="1 / 2"
        isError={isEmailError}
        onChange={emailChange}
      />
      <InformationInput
        placeholder="Password"
        maxLength={20}
        gridColumn="1 / 6"
        gridRow="2 / 3"
        isError={isPasswordError}
        onChange={passwordChange}
        hideShowButton={true}
      />
      <TextButton
        text="Forgot Password?"
        style={{
          fontSize: '1rem',
          color: theme.colors.secondary,
          gridColumn: '1 / 3',
          gridRow: '4 / 5',
          justifySelf: 'flex-start',
        }}
        onClick={() => navigate('/forgot-password')}
      />
      <TextButton
        text="Register"
        style={{
          fontSize: '1rem',
          color: theme.colors.secondary,
          gridColumn: '4 / 6',
          gridRow: '4 / 5',
          justifySelf: 'flex-end',
        }}
        onClick={() => navigate('/register')}
      />
      <SubmitButton
        text="Log In"
        style={{ gridColumn: '2 / 5', gridRow: '3 / 4' }}
      />
    </Form>
  );
}
