import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled, { DefaultTheme } from 'styled-components';

import { fadeInRightToCenter } from '../animations/basicAnimations';
import InformationInput from '../components/InformationInput';
import InformationLabel from '../components/InformationLabel';
import SubmitButton from '../components/SubmitButton';
import TextButton from '../components/TextButton';
import FormStyle from '../styles/FormStyle';

const Form = styled(FormStyle)`
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr) 1.5fr 1fr;
  height: 750px;

  animation: ${fadeInRightToCenter} 1.3s;
`;

interface RegisterFormProps {
  theme: DefaultTheme;
}

export default function RegisterForm({ theme }: RegisterFormProps) {
  const navigate = useNavigate();

  return (
    <Form theme={theme}>
      <InformationLabel
        text="Name"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="1 / 2"
      />
      <InformationInput
        type="text"
        placeholder="Jim Murray"
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="1 / 2"
        isError={false}
        onChange={() => console.log('Email changed')}
      />
      <InformationLabel
        text="Email"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="2 / 3"
      />
      <InformationInput
        type="email"
        placeholder="abcd1234@mail.com"
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="2 / 3"
        isError={false}
        onChange={() => console.log('Email changed')}
      />
      <InformationLabel
        text="Confirm Email"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="3 / 4"
      />
      <InformationInput
        type="text"
        placeholder="99999"
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="3 / 4"
        isError={false}
        onChange={() => console.log('Email changed')}
      />
      <InformationLabel
        text="Birth"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="4 / 5"
      />
      <InformationInput
        type="date"
        placeholder="abcd1234@mail.com"
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="4 / 5"
        isError={false}
        onChange={() => console.log('Email changed')}
      />
      <InformationLabel
        text="Gender"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="5 / 6"
      />
      <InformationInput
        type="radio"
        placeholder=""
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="5 / 6"
        isError={false}
        onChange={() => console.log('Email changed')}
      />
      <InformationLabel
        text="Password"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="6 / 7"
      />
      <InformationInput
        type="text"
        placeholder=". . . . . . . . . ."
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="6 / 7"
        isError={false}
        onChange={() => console.log('Email changed')}
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
      <InformationLabel
        text="re-enter Password"
        textSize="1rem"
        textColor={theme.colors.primary}
        gridColumn="1 / 3"
        gridRow="7 / 8"
      />
      <InformationInput
        type="text"
        placeholder=". . . . . . . . . ."
        maxLength={254}
        gridColumn="3 / 7"
        gridRow="7 / 8"
        isError={false}
        onChange={() => console.log('Email changed')}
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
