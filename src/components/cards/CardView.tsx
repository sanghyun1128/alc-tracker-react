import React from 'react';

import { styled } from 'styled-components';

import { ReviewCard } from '..';
import { CocktailCard } from '../../types/api/cocktailCard';
import { WhiskeyCard } from '../../types/api/whiskeyCard';
import { WineCard } from '../../types/api/wineCard';

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

interface CardViewProps {
  arr: Array<WineCard | WhiskeyCard | CocktailCard>;
  numOfRows: number;
  numOfColumns: number;
  style: React.CSSProperties;
}

/**
 * @param {CardViewProps} props
 * @param {Array<WineCard | WhiskeyCard | CocktailCard>} props.arr array of cards to be displayed
 * @param {Number} props.numOfRows number of rows to display
 * @param {Number} props.numOfColumns number of columns to display
 * @param {Object} props.style React.CSSProperties to be applied to the container
 */
export default function CardView({
  arr,
  numOfRows,
  numOfColumns,
  style,
}: CardViewProps) {
  arr = arr.slice(0, numOfRows * numOfColumns);

  return (
    <Container
      style={{
        ...style,
        gridTemplateColumns: `repeat(${numOfColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numOfRows}, 1fr)`,
      }}>
      {arr.map((wineCard, index) => {
        return (
          <ReviewCard
            key={index}
            card={wineCard}
            style={{
              gridColumn: `${Math.floor(index / numOfRows) + 1} / ${Math.floor(index / numOfRows) + 2}`,
              gridRow: `${(index % numOfRows) + 1} / ${(index % numOfRows) + 2}`,
            }}
          />
        );
      })}
    </Container>
  );
}
