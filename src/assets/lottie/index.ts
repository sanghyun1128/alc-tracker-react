import { LottieComponentProps } from 'lottie-react';

import NoData from './no-data.json';
import NotFoundAnimation from './not-found.json';

export const Animations: { [src: string]: LottieComponentProps } = {
  NOT_FOUND: {
    animationData: NotFoundAnimation,
  },
  NO_DATA: {
    animationData: NoData,
  },
};
