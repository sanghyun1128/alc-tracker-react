import { ArgentinaAppellationEnum } from './ArgentinaAppellationEnum';
import { AustraliaAppellationEnum } from './AustraliaAppellationEnum';
import { AustriaAppellationEnum } from './AustriaAppellationEnum';
import { CanadaAppellationEnum } from './CanadaAppellationEnum';
import { ChileAppellationEnum } from './ChileAppellationEnum';
import { FranceAppellationEnum } from './FranceAppellationEnum';
import { GermanyAppellationEnum } from './GermanyAppellationEnum';
import { GreeceAppellationEnum } from './GreeceAppellationEnum';
import { ItalyAppellationEnum } from './ItalyAppellationEnum';
import { NewZealandAppellationEnum } from './NewZealandAppellationEnum';
import { PortugalAppellationEnum } from './PortugalAppellationEnum';
import { SouthAfricaAppellationEnum } from './SouthAfricaAppellationEnum';
import { SpainAppellationEnum } from './SpainAppellationEnum';
import { USAAppellationEnum } from './USAAppellationEnum';

/**
 * Union type of all wine appellation enums across supported countries
 */
export type WineAppellationEnum =
  | ArgentinaAppellationEnum
  | AustraliaAppellationEnum
  | AustriaAppellationEnum
  | CanadaAppellationEnum
  | ChileAppellationEnum
  | FranceAppellationEnum
  | GermanyAppellationEnum
  | GreeceAppellationEnum
  | ItalyAppellationEnum
  | NewZealandAppellationEnum
  | PortugalAppellationEnum
  | SouthAfricaAppellationEnum
  | SpainAppellationEnum
  | USAAppellationEnum;

/**
 * All wine appellation values as a flat array of strings
 */
export const AllWineAppellations: string[] = [
  ...Object.values(ArgentinaAppellationEnum),
  ...Object.values(AustraliaAppellationEnum),
  ...Object.values(AustriaAppellationEnum),
  ...Object.values(CanadaAppellationEnum),
  ...Object.values(ChileAppellationEnum),
  ...Object.values(FranceAppellationEnum),
  ...Object.values(GermanyAppellationEnum),
  ...Object.values(GreeceAppellationEnum),
  ...Object.values(ItalyAppellationEnum),
  ...Object.values(NewZealandAppellationEnum),
  ...Object.values(PortugalAppellationEnum),
  ...Object.values(SouthAfricaAppellationEnum),
  ...Object.values(SpainAppellationEnum),
  ...Object.values(USAAppellationEnum),
];