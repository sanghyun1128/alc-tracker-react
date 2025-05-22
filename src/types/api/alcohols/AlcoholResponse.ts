export interface AlcoholResponse {
  id: string;
  name: string;
}

export interface SpiritResponse extends AlcoholResponse {
  cask: number;
}

export interface WineResponse extends AlcoholResponse {
  grape: string;
}

export interface CocktailResponse extends AlcoholResponse {
  base: string;
}
