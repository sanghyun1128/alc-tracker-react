import React from 'react';

import Lottie, { LottieComponentProps } from 'lottie-react';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface LottieContainerProps {
  animation: LottieComponentProps;
  style: React.CSSProperties;
}

export default function LottieContainer({
  animation,
  style,
}: LottieContainerProps) {
  return (
    <Container style={style}>
      <Lottie
        animationData={animation.animationData}
        style={{ width: '100%', height: '100%' }}
      />
    </Container>
  );
}
