import { LottieComponentProps } from 'lottie-react';

import CocktailAnimation from './cocktail.json';
import NotFoundAnimation from './not-found.json';
import WhiskeyAnimation from './whiskey.json';
import WineAnimation from './wine.json';

export const Animations: { [src: string]: LottieComponentProps } = {
  COCKTAIL: {
    animationData: CocktailAnimation,
  },
  NOT_FOUND: {
    animationData: NotFoundAnimation,
  },
  WHISKEY: {
    animationData: WhiskeyAnimation,
  },
  WINE: {
    animationData: WineAnimation,
  },
};
