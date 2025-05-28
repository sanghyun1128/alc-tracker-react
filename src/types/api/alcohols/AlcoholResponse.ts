import { CocktailCategoryEnum } from '../../alcohols/CocktailCategoryEnum';
import { SpiritCaskEnum } from '../../alcohols/SpiritCaskEnum';
import { SpiritCategoryEnum } from '../../alcohols/SpiritCategoryEnum';
import { WineCategoryEnum } from '../../alcohols/WineCategoryEnum';
import { WineGrapeEnum } from '../../alcohols/WineGrapeEnum';
import { ImageResponse } from '../common/ImageResponse';

export interface OwnerResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  index: number;
  nickname: string;
}

export interface AlcoholResponse {
  id: string;
  name: string;
  alc: number;
  createdAt: string;
  index: number;
  maker: string | null;
  owner: OwnerResponse;
  price: number | null;
  purchaseDate: string | null;
  purchaseLocation: string | null;
  updatedAt: string;
  vintage: number | null;
  images: ImageResponse[] | null;
}

export interface SpiritResponse extends AlcoholResponse {
  category: SpiritCategoryEnum | null;
  cask: SpiritCaskEnum | null;
}

export interface WineResponse extends AlcoholResponse {
  category: WineCategoryEnum | null;
  grape: WineGrapeEnum | null;
  region: string | null;
  appellation: string | null;
}

export interface CocktailResponse extends AlcoholResponse {
  category: CocktailCategoryEnum | null;
}
