import React from 'react';

import { styled } from 'styled-components';

import Alcohols from './sections/Alcohols';
import Profile from './sections/Profile';

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  gap: ${props => props.theme.gap};

  height: 100dvh;
  width: 100dvw;

  padding: ${props => props.theme.padding};
  box-sizing: border-box;

  overflow: hidden;
`;

export default function MyPage() {
  return (
    <Container>
      <Profile />
      <Alcohols />
    </Container>
  );
}
