import React, { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { requests } from '../../../api/requests';
import { DotPagination, IconButton } from '../../../components';
import {
  AlcoholType,
  AlcoholTypeOrder,
} from '../../../types/api/alcohols/AlcoholType';

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
  const [category, setCategory] = useState<AlcoholType>(AlcoholType.WINE);
  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    const fetchAlcohols = async () => {
      try {
        const response = await requests.getMyAlcohols(category);
        console.log('🚀 ~ fetchAlcohols ~ response:', response);
      } catch (error) {
        console.error('Failed to fetch alcohols:', error);
      }
    };

    fetchAlcohols();
  }, [category, pageIndex]);

  return (
    <Container>
      <CategoryWrapper>
        {AlcoholTypeOrder.map(type => (
          <IconButton
            key={type}
            icon={type.toUpperCase()}
            size={20}
            buttonColor={category === type ? 'primary' : 'transparent'}
            onClick={() => setCategory(type)}
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
