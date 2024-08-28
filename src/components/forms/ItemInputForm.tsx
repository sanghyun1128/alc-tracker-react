import React, { useCallback, useState } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { InformationInput, Selector, SimpleLabel } from '..';
import { Alcohol, AlcoholList } from '../../types/const';
import FiveStarInput from './tools/FiveStarInput';

const Container = styled.div`
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

export default function ItemInputForm({
  inputType,
  style,
  theme,
}: ItemInputFormProps) {
  const [mainStars, setMainStars] = useState<number>(0);
  const detailType = [
    ['Red', 'White', 'Rose', 'Sparkling', 'Dessert'],
    ['Whiskey', 'Brandy', 'Vodka', 'Gin', 'Rum', 'Tequila'],
    ['Shacking', 'Stirring', 'Blending', 'Layering'],
  ];
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  return (
    <Container style={style}>
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
          gridColumn: '8 / 9',
          gridRow: '2 / 3',
          margin: '8px',
          justifySelf: 'center',
        }}
      />
      <Selector
        id="type"
        options={detailType[AlcoholList.indexOf(inputType)]}
        style={{ gridColumn: '9 / 11', gridRow: '2 / 3' }}
        onChange={handleInputChange}
      />
      <SimpleLabel
        text="Total"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 3',
          gridRow: '2 / 3',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '3 / 5', gridRow: '2 / 3' }}
      />
      <SimpleLabel
        text="Nose"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 3',
          gridRow: '3 / 4',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '3 / 5', gridRow: '3 / 4' }}
      />
      <SimpleLabel
        text="Palate"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 3',
          gridRow: '4 / 5',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '3 / 5', gridRow: '4 / 5' }}
      />
      <SimpleLabel
        text="Finish"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 3',
          gridRow: '5 / 6',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <FiveStarInput
        numOfStars={mainStars}
        setStars={setMainStars}
        style={{ gridColumn: '3 / 5', gridRow: '5 / 6' }}
      />
    </Container>
  );
}
