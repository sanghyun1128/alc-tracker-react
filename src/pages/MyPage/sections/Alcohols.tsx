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
import AlcoholCard from '../components/AlcoholCard';

const Container = styled.div`
  grid-row: 2 / 3;
  gap: ${props => props.theme.gap};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 8fr 1fr;
  justify-items: stretch;
  align-items: center;

  height: 100%;
  min-height: 0;

  padding: ${props => props.theme.padding};
  background-color: ${props => props.theme.colors.componentBackground};
  border-radius: ${props => props.theme.borderRadius};
  box-sizing: border-box;

  overflow-y: auto;
`;

const CategoryWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary};
`;

const AlcoholWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  gap: ${props => props.theme.gap};

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;

  height: 100%;

  border-radius: ${props => props.theme.borderRadius};
`;

const PaginationWrapper = styled.div`
  grid-column: 1 / 4;
  grid-row: 3 / 4;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Alcohols() {
  const AlcoholTypeOrder = getSortedEnumValues(AlcoholTypeEnum);

  const [alcoholList, setAlcoholList] = useState<
    SpiritResponse[] | WineResponse[] | CocktailResponse[]
  >([]);
  const [category, setCategory] = useState<AlcoholTypeEnum>(
    AlcoholTypeOrder[0],
  );
  const [pageIndex, setPageIndex] = useState(0);

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
  }, [category]);

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

      <AlcoholWrapper>
        {alcoholList.map((alcohol, index) => (
          <AlcoholCard
            key={alcohol.id || index}
            alcohol={alcohol}
            alcoholType={category}
          />
        ))}
      </AlcoholWrapper>

      <PaginationWrapper>
        <DotPagination
          numOfPages={10}
          align="row"
          page={pageIndex}
          setPage={setPageIndex}
        />
      </PaginationWrapper>
    </Container>
  );
}
