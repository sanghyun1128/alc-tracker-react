import React from 'react';

import { styled } from 'styled-components';

import { WineCard } from '../types/api/wineCard';
import ReviewCard from './ReviewCard';

const Container = styled.div`
  display: flex;
`;

interface CardViewProps {
  arr: Array<WineCard>;
  style: React.CSSProperties;
}

export default function CardView({ arr, style }: CardViewProps) {
  return (
    <Container style={style}>
      {arr.map((wineCard, index) => {
        return <ReviewCard key={index} card={wineCard} />;
      })}
    </Container>
  );
}
