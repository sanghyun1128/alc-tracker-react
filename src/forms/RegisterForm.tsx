import React, { useReducer } from 'react';

import { useNavigate } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

import { fadeInRightToCenter } from '../animations/basicAnimations';
import DatePicker from '../components/DatePicker';
import InformationInput from '../components/InformationInput';
import SubmitButton from '../components/SubmitButton';
import TextButton from '../components/TextButton';
import { registerFormReducer } from '../reducers/registerFormReducer';
import FormStyle from '../styles/FormStyle';
import { RegisterFormState } from '../types/registerForm';
import {
  emailValidation,
  passwordValidation,
  nicknameValidation,
} from '../validation';

const Form = styled(FormStyle)`
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr) 1.5fr 1fr;
  height: 750px;

  animation: ${fadeInRightToCenter} 1.3s;
`;

interface RegisterFormProps {
  theme: DefaultTheme;
}

const initialState: RegisterFormState = {
  nickname: '',
  email: '',
  birth: null,
  gender: '',
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    switch (id) {
      case 'nickname':
        dispatch({ type: 'SET_NICKNAME', payload: value });
        dispatch({ type: 'SET_NICKNAME_VALID', payload: true });
        break;
      case 'email':
        dispatch({ type: 'SET_EMAIL', payload: value });
        dispatch({ type: 'SET_EMAIL_VALID', payload: true });
        break;
      case 'confirm email':
        dispatch({ type: 'SET_CONFIRM_EMAIL', payload: value });
        dispatch({ type: 'SET_EMAIL_CONFIRMED', payload: true });
        break;
      case 'birth':
        dispatch({ type: 'SET_BIRTH', payload: new Date(value) });
        dispatch({ type: 'SET_BIRTH_VALID', payload: true });
        break;
      case 'gender':
        dispatch({ type: 'SET_GENDER', payload: value });
        break;
      case 'password':
        dispatch({ type: 'SET_PASSWORD', payload: value });
        dispatch({ type: 'SET_PASSWORD_VALID', payload: true });
        break;
      case 'confirm password':
        dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: value });
        dispatch({ type: 'SET_PASSWORD_CONFIRMED', payload: true });
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={event => submitForm(event)}>
      <InformationInput
        type="text"
        placeholder="Jim Murray"
        maxLength={15}
        gridColumn="1 / 7"
        gridRow="1 / 2"
        isError={!state.isNicknameValid}
        labelText="Nickname"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <InformationInput
        type="email"
        placeholder="abcd1234@email.com"
        maxLength={254}
        gridColumn="1 / 7"
        gridRow="2 / 3"
        isError={!state.isEmailValid}
        labelText="Email"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <TextButton
        text="Confirm"
        textSize=""
        textColor={theme.colors.primary}
        gridColumn="6 / 7"
        gridRow="2 / 3"
        justifyContent="center"
        onClick={() => console.log('hide')}
      />
      <InformationInput
        type="text"
        placeholder="99999"
        maxLength={5}
        gridColumn="1 / 7"
        gridRow="3 / 4"
        isError={!state.isEmailConfirmed}
        labelText="Confirm Email"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      {/* <InformationInput
        type="date"
        placeholder=""
        maxLength={0}
        gridColumn="1 / 7"
        gridRow="4 / 5"
        isError={!state.isBirthValid}
        labelText="Birth"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      /> */}
      <DatePicker
        gridColumn="1 / 7"
        gridRow="4 / 5"
        isError={!state.isBirthValid}
        labelText="Birth"
        labelSize="1rem"
        labelColor={theme.colors.primary}
      />
      <InformationInput
        type="radio"
        placeholder=""
        maxLength={0}
        gridColumn="1 / 7"
        gridRow="5 / 6"
        isError={false}
        labelText="Gender"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <InformationInput
        type="password"
        placeholder=". . . . . . . . . ."
        maxLength={20}
        gridColumn="1 / 7"
        gridRow="6 / 7"
        isError={!state.isPasswordValid}
        labelText="Password"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <InformationInput
        type="password"
        placeholder=". . . . . . . . . ."
        maxLength={20}
        gridColumn="1 / 7"
        gridRow="7 / 8"
        isError={!state.isPasswordConfirmed}
        labelText="Confirm Password"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <TextButton
        text="hide"
        textSize=""
        textColor={theme.colors.primary}
        gridColumn="6 / 7"
        gridRow="6 / 7"
        justifyContent="center"
        onClick={() => console.log('hide')}
      />
      <TextButton
        text="hide"
        textSize=""
        textColor={theme.colors.primary}
        gridColumn="6 / 7"
        gridRow="7 / 8"
        justifyContent="center"
        onClick={() => console.log('hide')}
      />
      <SubmitButton text="Register" gridColumn="2 / 6" gridRow="8 / 9" />
      <TextButton
        text="Already have an account?"
        textSize=""
        textColor={theme.colors.secondary}
        gridColumn="1 / 7"
        gridRow="9 / 10"
        justifyContent="flex-end"
        onClick={() => navigate('/login')}
      />
    </Form>
  );
}
