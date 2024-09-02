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
    case 'SET_VINTAGE_VALID':
      return { ...state, isVintageValid: action.payload };
    case 'SET_PRICE_VALID':
      return { ...state, isPriceValid: action.payload };
    case 'SET_DETAIL_VALID':
      return { ...state, isDetailValid: action.payload };
  }
};
