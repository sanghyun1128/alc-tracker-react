import { ReactComponent as ArrowLeft } from './arrow-left.svg';
import { ReactComponent as Cocktail } from './cocktail.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as Setting } from './setting.svg';
import { ReactComponent as User } from './user.svg';
import { ReactComponent as Whiskey } from './whiskey.svg';
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
};
