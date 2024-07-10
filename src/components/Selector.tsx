import React from 'react';

import styled from 'styled-components';

import { LabelStyle } from '../styles';

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

const Select = styled.select`
  grid-column: 2 / 7;
`;

interface SelectorProps {
  gridColumn: string;
  gridRow: string;
  labelText: string;
  labelSize: string;
  labelColor: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Selector({
  gridColumn,
  gridRow,
  labelText,
  labelSize,
  labelColor,
  options,
  onChange,
}: SelectorProps) {
  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Label
        htmlFor={labelText.toLowerCase()}
        style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <Select id={labelText.toLowerCase()} onChange={onChange}>
        {options.map((e, i) => (
          <option key={e} value={i}>
            {e}
          </option>
        ))}
      </Select>
    </Container>
  );
}
