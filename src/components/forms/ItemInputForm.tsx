import React, { useCallback, useReducer, useState } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import {
  InformationInput,
  MultiLineInput,
  Selector,
  SimpleLabel,
  FiveStarInput,
} from '..';
import { itemInputFormReducer } from '../../reducers/itemInputFormReducer';
import { Alcohol, AlcoholList, subtypeList } from '../../types/const';
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
  const [mainStars, setMainStars] = useState<number>(0);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  return (
    <Form style={style}>
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
        id="type"
        options={subtypeList[AlcoholList.indexOf(inputType)]}
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
        numOfStars={mainStars}
        setStars={setMainStars}
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
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '2 / 4', gridRow: '3 / 4' }}
      />
      <InformationInput
        placeholder={'Notes'}
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
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '2 / 4', gridRow: '4 / 5' }}
      />
      <InformationInput
        placeholder={'Notes'}
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
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '2 / 4', gridRow: '5 / 6' }}
      />
      <InformationInput
        placeholder={'Notes'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '5 / 11', gridRow: '5 / 6' }}
        onChange={handleInputChange}
      />
      <MultiLineInput
        placeholder="Overall Review"
        style={{ gridColumn: '1 / 11', gridRow: '7 / 10' }}
      />
    </Form>
  );
}
