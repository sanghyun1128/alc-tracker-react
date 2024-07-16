import React from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { Animations } from '../assets/lottie';
import LottieContainer from './LottieContainer';
import TextLabel from './TextLabel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        text="Click the button to add a new item"
        size="h3"
        style={{ color: theme.colors.textDark, textAlign: 'center' }}
      />
    </Container>
  );
}
