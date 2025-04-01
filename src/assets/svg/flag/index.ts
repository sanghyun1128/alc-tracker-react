import { ReactComponent as kr } from './flag-kr.svg';
import { ReactComponent as other } from './flag-other.svg';
import { ReactComponent as us } from './flag-us.svg';

export type FlagIconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export const FlagIcons: { [src: string]: FlagIconType } = {
  US: us,
  KR: kr,
  OTHER: other,
};
