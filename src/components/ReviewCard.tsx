import React from 'react';

import { styled } from 'styled-components';

import { WineCard } from '../types/api/wineCard';

const Container = styled.div`
  display: flex;
`;

interface ReviewCardProps {
  card: WineCard;
  style?: React.CSSProperties;
}

export default function ReviewCard({ card, style = {} }: ReviewCardProps) {
  return (
    <Container style={style}>
      <h1>{card.name}</h1>
    </Container>
  );
}
