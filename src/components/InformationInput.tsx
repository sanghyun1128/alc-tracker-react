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

interface InformationInputProps {
  type: string;
  placeholder: string;
  maxLength: number;
  gridColumn: string;
  gridRow: string;
  isError: boolean;
  labelText: string;
  labelSize: string;
  labelColor: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InformationInput({
  type,
  placeholder,
  maxLength,
  gridColumn,
  gridRow,
  isError,
  labelText,
  labelSize,
  labelColor,
  onChange,
}: InformationInputProps) {
  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Label
        htmlFor={labelText.toLowerCase()}
        style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <Input
        id={labelText.toLowerCase()}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        $isError={isError}
        onChange={onChange}
      />
    </Container>
  );
}
