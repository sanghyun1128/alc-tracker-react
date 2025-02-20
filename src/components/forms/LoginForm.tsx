import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { TextInput, SubmitButton, TextButton } from '..';
import { fadeInBottomToCenter } from '../../animations/basicAnimations';
import { deviceSizes } from '../../const/deviceSizes';
import { emailValidation, passwordValidation } from '../../validation';

const Form = styled.form`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1.5fr) repeat(2, 1fr);
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.formBackground};
  animation: ${fadeInBottomToCenter} 1.3s;
  height: 450px;

  ${deviceSizes.abnormal} {
    width: 375px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.small} {
    width: 375px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.medium} {
    width: 500px;
    padding: 50px 50px 0px 50px;
  }
  ${deviceSizes.large} {
    width: 550px;
    padding: 50px 50px 0px 50px;
  }
`;

interface LoginFormProps {
  theme: DefaultTheme;
}

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

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = emailValidation(email);
    const isPasswordValid = passwordValidation(password);

    if (!isEmailValid) {
      console.log('Email is invalid');
      setIsEmailError(true);
    } else {
      console.log('Email is valid');
      setIsEmailError(false);
    }

    if (!isPasswordValid) {
      console.log('Password is invalid');
      setIsPasswordError(true);
    } else {
      console.log('Password is valid');
      setIsPasswordError(false);
    }

    if (isEmailValid && isPasswordValid) {
      try {
        // Basic Auth : "Basic <base64(email:password)>"
        const credentials = `${email}:${password}`;
        const encodedCredentials = window.btoa(credentials);

        const response = await axios.post(
          'http://localhost:4000/auth/login/email',
          {}, // empty body
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ${encodedCredentials}`,
            },
          },
        );

        console.log('Logged in successfully', response.data);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  };

  return (
    <Form onSubmit={event => submitForm(event)}>
      <TextInput
        placeholder="Email"
        maxLength={254}
        isError={isEmailError}
        hideShowButton={false}
        style={{ gridColumn: '1 / 6', gridRow: '1 / 2' }}
        onChange={emailChange}
      />
      <TextInput
        placeholder="Password"
        maxLength={20}
        isError={isPasswordError}
        hideShowButton={true}
        style={{ gridColumn: '1 / 6', gridRow: '2 / 3' }}
        onChange={passwordChange}
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
