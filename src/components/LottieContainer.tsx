import React from 'react';

import Lottie, { LottieComponentProps } from 'lottie-react';
import { styled } from 'styled-components';

const Container = styled.div``;

interface LottieContainerProps {
  animation: LottieComponentProps;
}

export default function LottieContainer({ animation }: LottieContainerProps) {
  return (
    <Container>
      <Lottie
        animationData={animation.animationData}
        style={{ width: '100%', height: '100%' }}
      />
    </Container>
  );
}
