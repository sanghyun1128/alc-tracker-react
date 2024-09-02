export type ItemInputFormState = {
  name: string;
  vintage: number | null;
  price: string | null;
  type: string;
  subtype: string;
  detail: string | null;

  isVintageValid: boolean;
  isPriceValid: boolean;
  isDetailValid: boolean;
};

export type ItemInputFormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_VINTAGE'; payload: number | null }
  | { type: 'SET_PRICE'; payload: string | null }
  | { type: 'SET_TYPE'; payload: string }
  | { type: 'SET_SUBTYPE'; payload: string }
  | { type: 'SET_DETAIL'; payload: string | null }
  | { type: 'SET_VINTAGE_VALID'; payload: boolean }
  | { type: 'SET_PRICE_VALID'; payload: boolean }
  | { type: 'SET_DETAIL_VALID'; payload: boolean };
