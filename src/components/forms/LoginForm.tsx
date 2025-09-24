import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { TextInput, SquareButton, TextButton, NotificationModal } from '..';
import { fadeInBottomToCenter } from '../../animations/basicAnimations';
import { requests } from '../../api/requests';
import { deviceSizes } from '../../const/deviceSizes';
import { emailValidation, passwordValidation } from '../../validation';

const Form = styled.form`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1.5fr) repeat(2, 1fr);
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.componentBackground};
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

  const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
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
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }

    if (!isPasswordValid) {
      setIsPasswordError(true);
    } else {
      setIsPasswordError(false);
    }

    if (isEmailValid && isPasswordValid) {
      try {
        await requests.emailLogin(email, password);
        navigate('/my');
      } catch (error: any) {
        const msg =
          error?.response?.data?.message ||
          error?.message ||
          '요청 처리 중 오류가 발생했습니다.';
        setErrorMessage(msg);
        setErrorModalOpen(true);
      }
    }
  };

  return (
    <Form onSubmit={event => submitForm(event)}>
      {errorModalOpen && (
        <NotificationModal
          title="오류"
          message={errorMessage || '에러가 발생했습니다.'}
          confirmText="확인"
          onClose={() => setErrorModalOpen(false)}
        />
      )}
      <TextInput
        placeholder="Email"
        value={email}
        maxLength={254}
        isError={isEmailError}
        hideShowButton={false}
        style={{ gridColumn: '1 / 6', gridRow: '1 / 2' }}
        onChange={emailChange}
      />
      <TextInput
        placeholder="Password"
        value={password}
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
      <SquareButton
        type="submit"
        text="Log In"
        size="medium"
        intent="primary"
        onClick={() => {}}
      />
    </Form>
  );
}
