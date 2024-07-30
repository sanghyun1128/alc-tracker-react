import React from 'react';

import { Animations } from '../assets/lottie';
import LottieContainer from '../components/LottieContainer';

export default function NotFoundPage() {
  return (
    <LottieContainer
      animation={Animations.NOT_FOUND}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
