import React from 'react';

import styled, { css } from 'styled-components';

import { shake } from '../animations/basicAnimations';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: baseline;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Label = styled.label`
  flex: 1 1 0;
  font-weight: bold;
  font-family: inherit;
`;

const Input = styled.input<{
  $isError: boolean;
}>`
  flex: 2 1 0;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 0px;
  border-bottom: ${({ $isError }) =>
    $isError
      ? css`3px solid ${props => props.theme.colors.warning}`
      : css`3px solid ${props => props.theme.colors.secondary}`};
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  color: ${props => props.theme.colors.textLight};
  animation: ${({ $isError }) =>
    $isError &&
    css`
      ${shake} 1.3s
    `};

  &:focus {
    transition: border-bottom 0.8s;
    border-bottom: 3px solid ${props => props.theme.colors.secondaryOn};
  }
`;

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
