import React from 'react';

import { styled } from 'styled-components';

import { WineCard } from '../types/api/wineCard';
import IconLabel from './IconLabel';
import TextLabel from './TextLabel';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30vw;
  min-width: 300px;
  height: 100px;
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius};
`;

interface ReviewCardProps {
  card: WineCard;
  style?: React.CSSProperties;
}

export default function ReviewCard({ card, style = {} }: ReviewCardProps) {
  const { name, vintage, type, totalStar } = card;

  return (
    <Container style={style}>
      <IconLabel
        icon={
          type === 'Red'
            ? 'WINE_RED'
            : type === 'White'
              ? 'WINE_WHITE'
              : type === 'Sparkling'
                ? 'WINE_SPARKLING'
                : 'WINE_RED'
        }
        size={30}
        style={{}}
      />
      <TextLabel text={name} size="h3" style={{}} />
      <TextLabel text={String(vintage)} size="h3" style={{}} />
      {new Array(5).fill(0).map((_, index) => {
        return (
          <IconLabel
            key={index}
            icon={
              index < Math.floor(Number(totalStar)) ? 'STAR_FULL' : 'STAR_EMPTY'
            }
            size={20}
            style={{}}
          />
        );
      })}
    </Container>
  );
}
