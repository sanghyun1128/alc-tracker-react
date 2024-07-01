import React from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { fadeInUp } from '../animations/basicAnimations';
import InformationInput from '../components/InformationInput';
import InformationLabel from '../components/InformationLabel';
import SubmitButton from '../components/SubmitButton';
import { deviceSizes } from '../const/deviceSizes';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
  align-items: center;
  justify-items: stretch;
  height: 400px;
  border-radius: ${props => props.theme.formBorderRadius};
  background-color: ${props => props.theme.colors.formBackground};

  animation: ${fadeInUp} 1.5s;

  ${deviceSizes.small} {
    width: 250px;
    padding: 20px;
  }
  ${deviceSizes.medium} {
    width: 400px;
    padding: 50px;
  }
  ${deviceSizes.large} {
    width: 500px;
    padding: 50px;
  }
`;

interface LoginFormProps {
  theme: DefaultTheme;
}

export default function LoginForm({ theme }: LoginFormProps) {
  return (
    <Form theme={theme}>
      <InformationLabel text="Email" gridcolumn="1 / 6" gridrow="1 / 2" />
      <InformationInput type="email" gridcolumn="1 / 6" gridrow="2 / 3" />
      <InformationLabel text="Password" gridcolumn="1 / 6" gridrow="3 / 4" />
      <InformationInput type="password" gridcolumn="1 / 6" gridrow="4 / 5" />
      <SubmitButton text="Log In" gridcolumn="2 / 5" gridrow="5 / 6" />
    </Form>
  );
}
