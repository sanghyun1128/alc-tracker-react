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
}

export interface SpiritResponse extends AlcoholResponse {
  category: string | null;
  cask: number | null;
}

export interface WineResponse extends AlcoholResponse {
  category: string | null;
  appellation: string | null;
  grape: string | null;
  region: string | null;
}

export interface CocktailResponse extends AlcoholResponse {
  category: string | null;
  base: string | null;
}
