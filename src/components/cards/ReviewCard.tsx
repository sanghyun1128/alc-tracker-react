import React from 'react';

import { styled } from 'styled-components';

import { IconLabel, HeadingLabel } from '.';
import { CocktailCard, WhiskeyCard, WineCard } from '../types/api';

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
      ? props.theme.colors.wineRed
      : props.$type === 'White'
        ? props.theme.colors.wineWhite
        : props.$type === 'Sparkling'
          ? props.theme.colors.wineWhite
          : props.$type === 'Whiskey'
            ? props.theme.colors.whiskey
            : props.$type === 'Cocktail'
              ? props.theme.colors.cocktail
              : props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
  transition: background-color 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.$type === 'Red'
        ? props.theme.colors.wineRedOn
        : props.$type === 'White'
          ? props.theme.colors.wineWhiteOn
          : props.$type === 'Sparkling'
            ? props.theme.colors.wineWhiteOn
            : props.$type === 'Whiskey'
              ? props.theme.colors.whiskeyOn
              : props.$type === 'Cocktail'
                ? props.theme.colors.cocktailOn
                : props.theme.colors.primaryOn};
  }
`;

interface ReviewCardProps {
  card: WineCard | WhiskeyCard | CocktailCard;
  style?: React.CSSProperties;
}

export default function ReviewCard({ card, style = {} }: ReviewCardProps) {
  const { name, totalStar } = card;
  const fullStars = Math.floor(Number(totalStar));
  const hasHalfStar = Number(totalStar) % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const type = 'type' in card ? String(card.type) : '';
  const vintage = 'vintage' in card ? String(card.vintage) : '';

  let iconName;
  if (type === 'Red') {
    iconName = 'WINE_RED';
  } else if (type === 'White') {
    iconName = 'WINE_WHITE';
  } else if (type === 'Sparkling') {
    iconName = 'WINE_SPARKLING';
  } else if (type === 'Whiskey') {
    iconName = 'WHISKEY';
  } else if (type === 'Cocktail') {
    iconName = 'COCKTAIL';
  } else {
    iconName = 'WINE';
  }

  return (
    <Container $type={type} style={style}>
      <IconLabel icon={iconName} size={30} style={{ flexBasis: '50px' }} />
      <HeadingLabel
        text={name + ' ' + vintage}
        size="h3"
        type="light"
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
