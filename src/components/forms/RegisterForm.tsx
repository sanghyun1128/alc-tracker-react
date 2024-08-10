import React, { useCallback, useReducer } from 'react';

import { useNavigate } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

import {
  InformationInput,
  DatePicker,
  SubmitButton,
  TextButton,
  Selector,
} from '..';
import { fadeInRightToCenter } from '../../animations/basicAnimations';
import { deviceSizes } from '../../const/deviceSizes';
import { genderList } from '../../const/gender';
import { registerFormReducer } from '../../reducers/registerFormReducer';
import { RegisterFormState } from '../../types/registerForm';
import {
  emailValidation,
  passwordValidation,
  nicknameValidation,
} from '../../validation';

const Form = styled.form`
  display: grid;
  align-items: center;
  justify-items: stretch;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr) 1.5fr 1fr;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.formBackground};
  animation: ${fadeInRightToCenter} 1.3s;
  height: 750px;

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

interface RegisterFormProps {
  theme: DefaultTheme;
}

const initialState: RegisterFormState = {
  nickname: '',
  email: '',
  birth: null,
  gender: 0,
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  isNicknameValid: true,
  isEmailValid: true,
  isEmailConfirmed: true,
  isBirthValid: true,
  isPasswordValid: true,
  isPasswordConfirmed: true,
};

export default function RegisterForm({ theme }: RegisterFormProps) {
  const [state, dispatch] = useReducer(registerFormReducer, initialState);
  const navigate = useNavigate();

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isNicknameValid = nicknameValidation(state.nickname);
    const isEmailValid = emailValidation(state.email);
    //TODO: Add real email confirmation logic
    const isEmailConfirmed = state.confirmEmail === '99999';
    const isBirthValid = state.birth !== null;
    const isPasswordValid = passwordValidation(state.password);
    const isPasswordConfirmed = state.password === state.confirmPassword;

    dispatch({ type: 'SET_NICKNAME_VALID', payload: isNicknameValid });
    dispatch({ type: 'SET_EMAIL_VALID', payload: isEmailValid });
    dispatch({ type: 'SET_EMAIL_CONFIRMED', payload: isEmailConfirmed });
    dispatch({ type: 'SET_BIRTH_VALID', payload: isBirthValid });
    dispatch({ type: 'SET_PASSWORD_VALID', payload: isPasswordValid });
    dispatch({ type: 'SET_PASSWORD_CONFIRMED', payload: isPasswordConfirmed });

    if (
      isNicknameValid &&
      isEmailValid &&
      isEmailConfirmed &&
      isBirthValid &&
      isPasswordValid &&
      isPasswordConfirmed
    ) {
      console.log('Form submitted');
    } else {
      console.log(state);
    }
  };

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = event.target;

      switch (id) {
        case 'nickname':
          dispatch({ type: 'SET_NICKNAME', payload: value.trim() });
          dispatch({ type: 'SET_NICKNAME_VALID', payload: true });
          break;
        case 'email':
          dispatch({ type: 'SET_EMAIL', payload: value.trim() });
          dispatch({ type: 'SET_EMAIL_VALID', payload: true });
          break;
        case 'email confirmation code':
          dispatch({ type: 'SET_CONFIRM_EMAIL', payload: value.trim() });
          dispatch({ type: 'SET_EMAIL_CONFIRMED', payload: true });
          break;
        case 'birth':
          dispatch({ type: 'SET_BIRTH', payload: new Date(value) });
          dispatch({ type: 'SET_BIRTH_VALID', payload: true });
          break;
        case 'gender':
          dispatch({ type: 'SET_GENDER', payload: +value });
          break;
        case 'password':
          dispatch({ type: 'SET_PASSWORD', payload: value });
          dispatch({ type: 'SET_PASSWORD_VALID', payload: true });
          break;
        case 're enter password':
          dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: value });
          dispatch({ type: 'SET_PASSWORD_CONFIRMED', payload: true });
          break;
        default:
          break;
      }
    },
    [],
  );

  return (
    <Form onSubmit={event => submitForm(event)}>
      <InformationInput
        placeholder="Nickname"
        maxLength={15}
        isError={!state.isNicknameValid}
        style={{ gridColumn: '1 / 7', gridRow: '1 / 2' }}
        hideShowButton={false}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder="Email"
        maxLength={254}
        isError={!state.isEmailValid}
        style={{ gridColumn: '1 / 7', gridRow: '2 / 3' }}
        hideShowButton={false}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder="Email confirmation code"
        maxLength={5}
        isError={!state.isEmailConfirmed}
        style={{ gridColumn: '1 / 7', gridRow: '3 / 4' }}
        hideShowButton={false}
        onChange={handleInputChange}
      />
      <DatePicker
        isError={!state.isBirthValid}
        style={{
          gridColumn: '1 / 7',
          gridRow: '4 / 5',
          fontSize: '1rem',
          color: theme.colors.primary,
        }}
        labelText="Birth"
        onChange={handleInputChange}
      />
      <Selector
        gridColumn="1 / 7"
        gridRow="5 / 6"
        labelText="Gender"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        options={genderList}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder="Password"
        maxLength={20}
        isError={!state.isPasswordValid}
        style={{ gridColumn: '1 / 7', gridRow: '6 / 7' }}
        hideShowButton={true}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder="Re enter password"
        maxLength={20}
        isError={!state.isPasswordConfirmed}
        style={{ gridColumn: '1 / 7', gridRow: '7 / 8' }}
        hideShowButton={true}
        onChange={handleInputChange}
      />
      <SubmitButton
        text="Register"
        style={{ gridColumn: '2 / 6', gridRow: '8 / 9' }}
      />
      <TextButton
        text="Already have an account?"
        style={{
          fontSize: '1rem',
          color: theme.colors.secondary,
          gridColumn: '1 / 7',
          gridRow: '9 / 10',
          justifySelf: 'flex-end',
        }}
        onClick={() => navigate('/login')}
      />
    </Form>
  );
}
