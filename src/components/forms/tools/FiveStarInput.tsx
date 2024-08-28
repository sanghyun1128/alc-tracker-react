import React from 'react';

import { styled } from 'styled-components';

import { FiveStarLabel, IconButton } from '../..';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

interface FiveStarInputProps {
  numOfStars: number;
  setStars: React.Dispatch<React.SetStateAction<number>>;
  style?: React.CSSProperties;
}

/**
 * @param {FiveStarInputProps} props
 * @param {number} props.numOfStars value of useState<number> to be used as the number of stars
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setStars function of useState<number> to set the value of numOfStars
 * @param {React.CSSProperties} props.style React.CSSProperties to be applied to the container
 */
export default function FiveStarInput({
  numOfStars,
  setStars,
  style = {},
}: FiveStarInputProps) {
  return (
    <Container style={style}>
      <IconButton
        icon="MINUS"
        onClick={() => setStars(numOfStars - 0.5)}
        size={20}
        buttonColor="secondary"
      />
      <FiveStarLabel numOfStars={numOfStars} />
      <IconButton
        icon="PLUS"
        onClick={() => setStars(numOfStars + 0.5)}
        size={20}
        buttonColor="secondary"
      />
    </Container>
  );
}
