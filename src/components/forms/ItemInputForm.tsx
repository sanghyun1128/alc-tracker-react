import React, { useCallback } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import {
  FiveStarLabel,
  IconButton,
  InformationInput,
  Selector,
  SimpleLabel,
} from '..';
import { Alcohol, AlcoholList } from '../../types/const';

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
        text="Total Stars"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 3',
          gridRow: '2 / 3',
          margin: '8px',
          justifySelf: 'start',
        }}
      />
      <IconButton
        icon="MINUS"
        onClick={() => handleInputChange}
        size={20}
        buttonColor="secondary"
        style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}
      />
      <FiveStarLabel
        numOfStars={5}
        style={{ gridColumn: '4 / 5', gridRow: '2 / 3', justifySelf: 'center' }}
      />
      <IconButton
        icon="PLUS"
        onClick={() => handleInputChange}
        size={20}
        buttonColor="secondary"
        style={{ gridColumn: '5 / 6', gridRow: '2 / 3' }}
      />
    </Container>
  );
}
