import React from 'react';

import styled from 'styled-components';

import InputStyle from '../styles/InputStyle';
import LabelStyle from '../styles/LabelStyle';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: baseline;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Label = styled(LabelStyle)``;

const Input = styled(InputStyle)``;

interface DatePickerProps {
  gridColumn: string;
  gridRow: string;
  isError: boolean;
  labelText: string;
  labelSize: string;
  labelColor: string;
}

export default function DatePicker({
  gridColumn,
  gridRow,
  isError,
  labelText,
  labelSize,
  labelColor,
}: DatePickerProps) {
  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Label
        htmlFor={labelText.toLowerCase()}
        style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <Input type="date" $isError={isError} />
    </Container>
  );
}
