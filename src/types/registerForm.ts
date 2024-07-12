export type RegisterFormState = {
  nickname: string;
  email: string;
  confirmEmail: string;
  birth: Date | null;
  gender: number;
  password: string;
  confirmPassword: string;

  isNicknameValid: boolean;
  isEmailValid: boolean;
  isEmailConfirmed: boolean;
  isBirthValid: boolean;
  isPasswordValid: boolean;
  isPasswordConfirmed: boolean;
};

export type RegisterFormAction =
  | { type: 'SET_NICKNAME'; payload: string }
  | { type: 'SET_EMAIL'; payload: string }
  | { type: 'SET_CONFIRM_EMAIL'; payload: string }
  | { type: 'SET_BIRTH'; payload: Date }
  | { type: 'SET_GENDER'; payload: number }
  | { type: 'SET_PASSWORD'; payload: string }
  | { type: 'SET_CONFIRM_PASSWORD'; payload: string }
  | { type: 'SET_NICKNAME_VALID'; payload: boolean }
  | { type: 'SET_EMAIL_VALID'; payload: boolean }
  | { type: 'SET_EMAIL_CONFIRMED'; payload: boolean }
  | { type: 'SET_BIRTH_VALID'; payload: boolean }
  | { type: 'SET_PASSWORD_VALID'; payload: boolean }
  | { type: 'SET_PASSWORD_CONFIRMED'; payload: boolean };
