import React, { useCallback } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { InformationInput, Selector, SimpleLabel } from '..';
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
        style={{ gridColumn: '1 / 8', gridRow: '1 / 2' }}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder={'Vintage'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '8 / 11', gridRow: '1 / 2' }}
        onChange={handleInputChange}
      />
      <InformationInput
        placeholder={'Price'}
        maxLength={20}
        isError={false}
        hideShowButton={false}
        style={{ gridColumn: '8 / 11', gridRow: '2 / 3' }}
        onChange={handleInputChange}
      />
      <SimpleLabel
        text="Type"
        style={{
          fontSize: '1rem',
          color: theme.colors.primary,
          gridColumn: '1 / 2',
          gridRow: '2 / 3',
          margin: '8px',
        }}
      />
      <Selector
        id="type"
        options={detailType[AlcoholList.indexOf(inputType)]}
        style={{ gridColumn: '2 / 4', gridRow: '2 / 3' }}
        onChange={handleInputChange}
      />
    </Container>
  );
}
