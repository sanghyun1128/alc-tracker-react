import { ReactComponent as ArrowLeft } from './arrow-left.svg';

export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

export const Icons: { [src: string]: IconType } = {
  ARROW_LEFT: ArrowLeft,
};
