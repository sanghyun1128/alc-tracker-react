import React, { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { requests } from '../../../api/requests';
import { DotPagination, IconButton } from '../../../components';
import { AlcoholTypeEnum } from '../../../types/alcohols/AlcoholTypeEnum';
import {
  CocktailResponse,
  SpiritResponse,
  WineResponse,
} from '../../../types/api/alcohols/AlcoholResponse';
import { getSortedEnumValues } from '../../../utils/enumUtils';

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

//TODO: 알콜 각각 표시해주는 컴포넌트 만들기
//TODO: 리액트 쿼리 이용해서 페이지네이션 구현하기
export default function Alcohols() {
  const AlcoholTypeOrder = getSortedEnumValues(AlcoholTypeEnum);

  const [alcoholList, setAlcoholList] = useState<
    SpiritResponse[] | WineResponse[] | CocktailResponse[]
  >([]);
  const [category, setCategory] = useState<AlcoholTypeEnum>(
    AlcoholTypeOrder[0],
  );
  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    const fetchAlcohols = async () => {
      try {
        const response = await requests.getMyAlcohols(category);
        console.log('🚀 ~ fetchAlcohols ~ response:', response);
        setAlcoholList(response.data.data);
        console.log('🚀 ~ fetchAlcohols ~ alcohols:', alcoholList);
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
