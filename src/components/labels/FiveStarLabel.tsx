import React from 'react';

import { styled } from 'styled-components';

import { IconLabel } from '..';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
`;

interface FiveStarLabelProps {
  numOfStars: number;
  style: React.CSSProperties;
}

export default function FiveStarLabel({
  numOfStars,
  style,
}: FiveStarLabelProps) {
  const fullStars = Math.floor(Number(numOfStars));
  const hasHalfStar = Number(numOfStars) % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Container style={style}>
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
