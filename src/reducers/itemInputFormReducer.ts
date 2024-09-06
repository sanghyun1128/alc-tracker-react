import {
  ItemInputFormAction,
  ItemInputFormState,
} from '../types/itemInputForm';

export const itemInputFormReducer = (
  state: ItemInputFormState,
  action: ItemInputFormAction,
) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_VINTAGE':
      return { ...state, vintage: action.payload };
    case 'SET_PRICE':
      return { ...state, price: action.payload };
    case 'SET_TYPE':
      return { ...state, type: action.payload };
    case 'SET_SUBTYPE':
      return { ...state, subtype: action.payload };
    case 'SET_DETAIL':
      return { ...state, detail: action.payload };
    case 'SET_TOTAL_STARS':
      return { ...state, totalStars: action.payload };
    case 'SET_NOSE_STARS':
      return { ...state, noseStars: action.payload };
    case 'SET_PALATE_STARS':
      return { ...state, palateStars: action.payload };
    case 'SET_FINISH_STARS':
      return { ...state, finishStars: action.payload };
    case 'SET_NOSE_NOTES':
      return { ...state, noseNotes: action.payload };
    case 'SET_PALATE_NOTES':
      return { ...state, palateNotes: action.payload };
    case 'SET_FINISH_NOTES':
      return { ...state, finishNotes: action.payload };
  }
};
