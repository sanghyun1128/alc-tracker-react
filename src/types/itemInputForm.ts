export type ItemInputFormState = {
  name: string;
  vintage: number | null;
  price: string | null;
  type: string;
  subtype: string;
  detail: string | null;
  totalStars: number;
  noseStars: number;
  palateStars: number;
  finishStars: number;
  noseNotes: string | null;
  palateNotes: string | null;
  finishNotes: string | null;
};

export type ItemInputFormAction =
  | { type: 'SET_NAME'; payload: string }
  | { type: 'SET_VINTAGE'; payload: number | null }
  | { type: 'SET_PRICE'; payload: string | null }
  | { type: 'SET_TYPE'; payload: string }
  | { type: 'SET_SUBTYPE'; payload: string }
  | { type: 'SET_DETAIL'; payload: string | null }
  | { type: 'SET_TOTAL_STARS'; payload: number }
  | { type: 'SET_NOSE_STARS'; payload: number }
  | { type: 'SET_PALATE_STARS'; payload: number }
  | { type: 'SET_FINISH_STARS'; payload: number }
  | { type: 'SET_NOSE_NOTES'; payload: string }
  | { type: 'SET_PALATE_NOTES'; payload: string }
  | { type: 'SET_FINISH_NOTES'; payload: string };
