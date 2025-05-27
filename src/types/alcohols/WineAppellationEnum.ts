import { ArgentinaAppellationEnum } from './appellations/ArgentinaAppellationEnum';
import { AustraliaAppellationEnum } from './appellations/AustraliaAppellationEnum';
import { AustriaAppellationEnum } from './appellations/AustriaAppellationEnum';
import { CanadaAppellationEnum } from './appellations/CanadaAppellationEnum';
import { ChileAppellationEnum } from './appellations/ChileAppellationEnum';
import { FranceAppellationEnum } from './appellations/FranceAppellationEnum';
import { GermanyAppellationEnum } from './appellations/GermanyAppellationEnum';
import { GreeceAppellationEnum } from './appellations/GreeceAppellationEnum';
import { ItalyAppellationEnum } from './appellations/ItalyAppellationEnum';
import { NewZealandAppellationEnum } from './appellations/NewZealandAppellationEnum';
import { PortugalAppellationEnum } from './appellations/PortugalAppellationEnum';
import { SouthAfricaAppellationEnum } from './appellations/SouthAfricaAppellationEnum';
import { SpainAppellationEnum } from './appellations/SpainAppellationEnum';
import { USAAppellationEnum } from './appellations/USAAppellationEnum';

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
