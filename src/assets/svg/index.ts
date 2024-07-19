import { ReactComponent as ArrowLeft } from './arrow-left.svg';
import { ReactComponent as Cocktail } from './cocktail.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as Setting } from './setting.svg';
import { ReactComponent as StarEmpty } from './star-empty.svg';
import { ReactComponent as StarFull } from './star-full.svg';
import { ReactComponent as User } from './user.svg';
import { ReactComponent as Whiskey } from './whiskey.svg';
import { ReactComponent as WineRed } from './wine-red.svg';
import { ReactComponent as WineSparkling } from './wine-sparkling.svg';
import { ReactComponent as WineWhite } from './wine-white.svg';
import { ReactComponent as Wine } from './wine.svg';

export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export const Icons: { [src: string]: IconType } = {
  ARROW_LEFT: ArrowLeft,
  WINE: Wine,
  WHISKEY: Whiskey,
  COCKTAIL: Cocktail,
  SETTING: Setting,
  USER: User,
  PLUS: Plus,
  STAR_EMPTY: StarEmpty,
  STAR_FULL: StarFull,
  WINE_RED: WineRed,
  WINE_WHITE: WineWhite,
  WINE_SPARKLING: WineSparkling,
};
