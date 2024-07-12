import { RegisterFormState, RegisterFormAction } from '../types/registerForm';

export const registerFormReducer = (
  state: RegisterFormState,
  action: RegisterFormAction,
) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return { ...state, nickname: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_CONFIRM_EMAIL':
      return { ...state, confirmEmail: action.payload };
    case 'SET_BIRTH':
      return { ...state, birth: action.payload };
    case 'SET_GENDER':
      return { ...state, gender: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload };
    case 'SET_NICKNAME_VALID':
      return { ...state, isNicknameValid: action.payload };
    case 'SET_EMAIL_VALID':
      return { ...state, isEmailValid: action.payload };
    case 'SET_EMAIL_CONFIRMED':
      return { ...state, isEmailConfirmed: action.payload };
    case 'SET_BIRTH_VALID':
      return { ...state, isBirthValid: action.payload };
    case 'SET_PASSWORD_VALID':
      return { ...state, isPasswordValid: action.payload };
    case 'SET_PASSWORD_CONFIRMED':
      return { ...state, isPasswordConfirmed: action.payload };
  }
};
