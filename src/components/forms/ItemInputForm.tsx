import React, { useCallback, useEffect, useReducer } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import {
  InformationInput,
  MultiLineInput,
  Selector,
  SimpleLabel,
  FiveStarInput,
  SubmitButton,
} from '..';
import { itemInputFormReducer } from '../../reducers/itemInputFormReducer';
import { Alcohol, AlcoholList, SubtypeList } from '../../types/const';
import { ItemInputFormState } from '../../types/itemInputForm';

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
  width: 90%;
  height: 100%;
`;

interface ItemInputFormProps {
  inputType: Alcohol;
  style: React.CSSProperties;
  theme: DefaultTheme;
}

const initialState: ItemInputFormState = {
  name: '',
  vintage: null,
  price: null,
  type: '',
  subtype: '',
  detail: null,
  totalStars: 2.5,
  noseStars: 2.5,
  palateStars: 2.5,
  finishStars: 2.5,
  noseNotes: '',
  palateNotes: '',
  finishNotes: '',

  isVintageValid: true,
  isPriceValid: true,
  isDetailValid: true,
};

export default function ItemInputForm({
  inputType,
  style,
  theme,
}: ItemInputFormProps) {
  const [state, dispatch] = useReducer(itemInputFormReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_TYPE', payload: inputType });
  }, [inputType]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isVintageValid = state.vintage !== null;
    const isPriceValid = state.price !== null;
    const isDetailValid = state.detail !== null;

    dispatch({ type: 'SET_VINTAGE_VALID', payload: isVintageValid });
    dispatch({ type: 'SET_PRICE_VALID', payload: isPriceValid });
    dispatch({ type: 'SET_DETAIL_VALID', payload: isDetailValid });

    if (isVintageValid && isPriceValid && isDetailValid) {
      console.log('Form submitted');
      console.log(state);
    } else {
      console.log(state);
    }
  };

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = event.target;

      switch (id) {
        case 'name':
          dispatch({ type: 'SET_NAME', payload: value });
          break;
        case 'vintage':
          dispatch({ type: 'SET_VINTAGE', payload: parseInt(value) });
          break;
        case 'price':
          dispatch({ type: 'SET_PRICE', payload: value });
          break;
        case 'type':
          dispatch({ type: 'SET_TYPE', payload: value });
          break;
        case 'subtype':
          dispatch({
            type: 'SET_SUBTYPE',
            payload: SubtypeList[AlcoholList.indexOf(inputType)][+value],
          });
          break;
        case 'detail':
          dispatch({ type: 'SET_DETAIL', payload: value });
          break;
        case 'finish stars':
          dispatch({ type: 'SET_FINISH_STARS', payload: parseInt(value) });
          break;
        case 'nose notes':
          dispatch({ type: 'SET_NOSE_NOTES', payload: value });
          break;
        case 'palate notes':
          dispatch({ type: 'SET_PALATE_NOTES', payload: value });
          break;
        case 'finish notes':
          dispatch({ type: 'SET_FINISH_NOTES', payload: value });
          break;
        default:
          break;
      }
    },
    [],
  );

  return (
    <Form style={style} onSubmit={event => submitForm(event)}>
      <InformationInput
        placeholder={'Name'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '1 / 7', gridRow: '1 / 2' }}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder={'Vintage'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '7 / 9', gridRow: '1 / 2' }}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder={'Price'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '9 / 11', gridRow: '1 / 2' }}
        onChange={handleInputChange}
      />
      <SimpleLabel
        text="Type"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '5 / 6',
          gridRow: '2 / 3',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <Selector
        id="subtype"
        options={SubtypeList[AlcoholList.indexOf(inputType)]}
        style={{ gridColumn: '6 / 11', gridRow: '2 / 3' }}
        onChange={handleInputChange}
      />
      <SimpleLabel
        text="Total"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 2',
          gridRow: '2 / 3',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={state.totalStars}
        setStars={stars =>
          dispatch({ type: 'SET_TOTAL_STARS', payload: stars })
        }
        style={{ gridColumn: '2 / 4', gridRow: '2 / 3' }}
      />
      <SimpleLabel
        text="Nose"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 2',
          gridRow: '3 / 4',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={state.noseStars}
        setStars={stars => dispatch({ type: 'SET_NOSE_STARS', payload: stars })}
        style={{ gridColumn: '2 / 4', gridRow: '3 / 4' }}
      />
      <InformationInput
        placeholder={'Nose Notes'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '5 / 11', gridRow: '3 / 4' }}
        onChange={handleInputChange}
      />
      <SimpleLabel
        text="Palate"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 2',
          gridRow: '4 / 5',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={state.palateStars}
        setStars={stars =>
          dispatch({ type: 'SET_PALATE_STARS', payload: stars })
        }
        style={{ gridColumn: '2 / 4', gridRow: '4 / 5' }}
      />
      <InformationInput
        placeholder={'Palate Notes'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '5 / 11', gridRow: '4 / 5' }}
        onChange={handleInputChange}
      />
      <SimpleLabel
        text="Finish"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 2',
          gridRow: '5 / 6',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={state.finishStars}
        setStars={stars =>
          dispatch({ type: 'SET_FINISH_STARS', payload: stars })
        }
        style={{ gridColumn: '2 / 4', gridRow: '5 / 6' }}
      />
      <InformationInput
        placeholder={'Finish Notes'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '5 / 11', gridRow: '5 / 6' }}
        onChange={handleInputChange}
      />
      <MultiLineInput
        placeholder="Detail"
        style={{ gridColumn: '1 / 11', gridRow: '7 / 9' }}
        onChange={handleInputChange}
      />

      <SubmitButton
        text="Add Item"
        style={{ gridColumn: '5 / 7', gridRow: '9 / 11' }}
      />
    </Form>
  );
}
