import React from 'react';

import { styled } from 'styled-components';

import Alcohols from './sections/Alcohols';
import Profile from './sections/Profile';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  height: 100vh;
  height: 100dvh;
  width: 100vw;
  width: 100dvw;
`;

export default function MyPage() {
  return (
    <Container>
      <Profile />
      <Alcohols />
    </Container>
  );
}
