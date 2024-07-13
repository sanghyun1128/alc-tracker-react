import { LottieComponentProps } from 'lottie-react';

import NotFoundAnimation from './not-found.json';

export const Animations: { [src: string]: LottieComponentProps } = {
  NOT_FOUND: {
    animationData: NotFoundAnimation,
  },
};
