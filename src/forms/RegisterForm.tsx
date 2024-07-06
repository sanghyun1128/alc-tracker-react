import React, { useReducer } from 'react';

import { useNavigate } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

import { fadeInRightToCenter } from '../animations/basicAnimations';
import InformationInput from '../components/InformationInput';
import SubmitButton from '../components/SubmitButton';
import TextButton from '../components/TextButton';
import { registerFormReducer } from '../reducers/registerFormReducer';
import FormStyle from '../styles/FormStyle';
import { RegisterFormState } from '../types/registerForm';

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
  name: '',
  email: '',
  birth: new Date(),
  gender: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  isNameValid: false,
  isEmailValid: false,
  isEmailConfirmed: false,
  isPasswordValid: false,
  isPasswordConfirmed: false,
};

export default function RegisterForm({ theme }: RegisterFormProps) {
  const [state, dispatch] = useReducer(registerFormReducer, initialState);
  const navigate = useNavigate();

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    switch (id) {
      case 'name':
        dispatch({ type: 'SET_NAME', payload: value });
        break;
      case 'email':
        dispatch({ type: 'SET_EMAIL', payload: value });
        break;
      case 'confirm email':
        dispatch({ type: 'SET_CONFIRM_EMAIL', payload: value });
        break;
      case 'birth':
        dispatch({ type: 'SET_BIRTH', payload: new Date(value) });
        break;
      case 'gender':
        dispatch({ type: 'SET_GENDER', payload: value });
        break;
      case 'password':
        dispatch({ type: 'SET_PASSWORD', payload: value });
        break;
      case 'confirm password':
        dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: value });
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
        maxLength={254}
        gridColumn="1 / 7"
        gridRow="1 / 2"
        isError={false}
        labelText="Name"
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
        isError={false}
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
        maxLength={254}
        gridColumn="1 / 7"
        gridRow="3 / 4"
        isError={false}
        labelText="Confirm Email"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <InformationInput
        type="date"
        placeholder=""
        maxLength={254}
        gridColumn="1 / 7"
        gridRow="4 / 5"
        isError={false}
        labelText="Birth"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <InformationInput
        type="radio"
        placeholder=""
        maxLength={254}
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
        maxLength={254}
        gridColumn="1 / 7"
        gridRow="6 / 7"
        isError={false}
        labelText="Password"
        labelSize="1rem"
        labelColor={theme.colors.primary}
        onChange={handleInputChange}
      />
      <InformationInput
        type="password"
        placeholder=". . . . . . . . . ."
        maxLength={254}
        gridColumn="1 / 7"
        gridRow="7 / 8"
        isError={false}
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
