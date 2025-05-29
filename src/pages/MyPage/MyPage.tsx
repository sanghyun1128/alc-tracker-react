import React from 'react';

import { styled } from 'styled-components';

import Alcohols from './sections/Alcohols';
import Profile from './sections/Profile';

const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 8fr;
  gap: 0;

  height: 100dvh;
  width: 100dvw;

  padding: 10px;
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
