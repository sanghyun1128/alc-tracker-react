import React from 'react';

import styled from 'styled-components';

import { InputStyle, LabelStyle } from '../styles';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Label = styled(LabelStyle)`
  grid-column: 1 / 2;
`;

const Input = styled(InputStyle)`
  grid-column: 2 / 7;
  margin: 0;
`;

interface DatePickerProps {
  gridColumn: string;
  gridRow: string;
  isError: boolean;
  labelText: string;
  labelSize: string;
  labelColor: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//TODO: Remake DatePicker with select dropdowns for day, month, and year
export default function DatePicker({
  gridColumn,
  gridRow,
  isError,
  labelText,
  labelSize,
  labelColor,
  onChange,
}: DatePickerProps) {
  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Label
        htmlFor={labelText.toLowerCase()}
        style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <Input
        type="date"
        id={labelText.toLowerCase()}
        max="2077-12-31"
        min="1900-01-01"
        $isError={isError}
        onChange={onChange}
      />
    </Container>
  );
}
