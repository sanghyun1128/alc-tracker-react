import React, { useState } from 'react';

import { styled } from 'styled-components';

import { DotPagination, IconButton } from '../../../components';

const Container = styled.div`
  grid-row: 2 / 3;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 10fr;
  justify-items: stretch;
  align-items: center;

  background-color: ${props => props.theme.colors.componentBackground};
  margin: ${props => props.theme.margin};
  border-radius: ${props => props.theme.borderRadius};

  overflow-y: auto;
`;

const CategoryWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: ${props => props.theme.margin};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary};
`;

export default function Alcohols() {
  const categoryList = [
    ['WINE', 'Wine'],
    ['WHISKEY', 'Whiskey'],
    ['COCKTAIL', 'Cocktail'],
  ];

  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  const [pageIndex, setPageIndex] = useState<number>(0);

  return (
    <Container>
      <CategoryWrapper>
        {categoryList.map(([iconName], idx) => (
          <IconButton
            key={idx}
            icon={iconName}
            size={20}
            buttonColor={categoryIndex === idx ? 'primary' : 'transparent'}
            onClick={() => setCategoryIndex(idx)}
          />
        ))}
      </CategoryWrapper>

      <DotPagination
        numOfPages={10}
        align="row"
        page={pageIndex}
        setPage={setPageIndex}
      />
    </Container>
  );
}
