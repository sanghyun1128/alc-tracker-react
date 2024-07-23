import React from 'react';

import { styled } from 'styled-components';

import { WineCard } from '../types/api/wineCard';
import IconLabel from './IconLabel';
import TextLabel from './TextLabel';

const Container = styled.div<{ $type: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30vw;
  min-width: 300px;
  height: 80px;
  padding: 10px;
  background-color: ${props =>
    props.$type === 'Red'
      ? props.theme.colors.wineRedOn
      : props.theme.colors.wineWhiteOn};
  border-radius: ${props => props.theme.borderRadius};
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.$type === 'Red'
        ? props.theme.colors.wineRed
        : props.theme.colors.wineWhite};
  }
`;

interface ReviewCardProps {
  card: WineCard;
  style?: React.CSSProperties;
}

export default function ReviewCard({ card, style = {} }: ReviewCardProps) {
  const { name, vintage, type, totalStar } = card;
  const fullStars = Math.floor(Number(totalStar));
  const hasHalfStar = Number(totalStar) % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Container $type={type} style={style}>
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
        style={{ flexBasis: '50px' }}
      />
      <TextLabel
        text={name + ' ' + vintage}
        size="h3"
        style={{
          flexBasis: '100px',
          flexGrow: '1',
          marginLeft: '10px',
          marginRight: '10px',
        }}
      />
      {new Array(fullStars).fill(0).map((_, index) => (
        <IconLabel
          key={`full-${index}`}
          icon="STAR_FULL"
          size={15}
          style={{ padding: '0px', flexBasis: '15px' }}
        />
      ))}
      {hasHalfStar && (
        <IconLabel
          icon="STAR_HALF"
          size={15}
          style={{ padding: '0px', flexBasis: '15px' }}
        />
      )}
      {new Array(emptyStars).fill(0).map((_, index) => (
        <IconLabel
          key={`empty-${index}`}
          icon="STAR_EMPTY"
          size={15}
          style={{ padding: '0px', flexBasis: '15px' }}
        />
      ))}
    </Container>
  );
}
