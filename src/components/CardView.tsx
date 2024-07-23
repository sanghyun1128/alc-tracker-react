import React from 'react';

import { styled } from 'styled-components';

import { CocktailCard } from '../types/api/cocktailCard';
import { WhiskeyCard } from '../types/api/whiskeyCard';
import { WineCard } from '../types/api/wineCard';
import ReviewCard from './ReviewCard';

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface CardViewProps {
  arr: Array<WineCard | WhiskeyCard | CocktailCard>;
  style: React.CSSProperties;
}

export default function CardView({ arr, style }: CardViewProps) {
  const numOfRows = 2;
  const numOfColumns = arr.length / numOfRows;

  return (
    <Container
      style={{
        ...style,
        gridTemplateColumns: `repeat(${numOfRows}, 1fr)`,
        gridTemplateRows: `repeat(${numOfColumns}, 1fr)`,
      }}>
      {arr.map((wineCard, index) => {
        return (
          <ReviewCard
            key={index}
            card={wineCard}
            style={{
              gridColumn: `${~~(index / numOfColumns) + 1} / ${~~(index / numOfColumns) + 2}`,
              gridRow: `${(index + 1) % numOfColumns} / ${((index + 1) % numOfColumns) + 1}`,
            }}
          />
        );
      })}
    </Container>
  );
}
