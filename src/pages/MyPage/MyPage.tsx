import React from 'react';

import { styled } from 'styled-components';

import Alcohols from './sections/Alcohols';
import Profile from './sections/Profile';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100dvh;
  width: 100dvw;
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
