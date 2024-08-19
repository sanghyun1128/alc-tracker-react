import React from 'react';

import { styled } from 'styled-components';

import { Alcohol } from '../../types/const';

const Container = styled.div``;
interface ItemInputFormProps {
  inputType: Alcohol;
  style: React.CSSProperties;
}

export default function ItemInputForm({
  inputType,
  style,
}: ItemInputFormProps) {
  return (
    <Container style={style}>
      <h1>{inputType}</h1>
    </Container>
  );
}
