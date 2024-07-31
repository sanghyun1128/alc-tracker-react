import React from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { LottieContainer, TextLabel } from '.';
import { Animations } from '../assets/lottie';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

interface EmptyViewProps {
  style: React.CSSProperties;
  theme: DefaultTheme;
}

export default function EmptyView({ style, theme }: EmptyViewProps) {
  return (
    <Container style={style}>
      <LottieContainer
        animation={Animations.NO_DATA}
        style={{ width: '50%', height: '50%' }}
      />
      <TextLabel
        type="dark"
        text="Click the button to add a new item"
        size="h3"
        style={{ color: theme.colors.textDark, textAlign: 'center' }}
      />
    </Container>
  );
}
