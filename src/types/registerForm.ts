export type RegisterFormState = {
  name: string;
  email: string;
  confirmEmail: string;
  birth: Date;
  gender: string;
  password: string;
  confirmPassword: string;

  isNameValid: boolean;
  isEmailValid: boolean;
  isEmailConfirmed: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmed: boolean;
};

export type RegisterFormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_CONFIRM_EMAIL'; payload: string }
  | { type: 'SET_BIRTH'; payload: Date }
  | { type: 'SET_GENDER'; payload: string }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_CONFIRM_PASSWORD'; payload: string }
  | { type: 'SET_NAME_VALID'; payload: boolean }
  | { type: 'SET_EMAIL_VALID'; payload: boolean }
  | { type: 'SET_EMAIL_CONFIRMED'; payload: boolean }
  | { type: 'SET_PASSWORD_VALID'; payload: boolean }
  | { type: 'SET_PASSWORD_CONFIRMED'; payload: boolean };
