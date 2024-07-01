import React from 'react';

import styled from 'styled-components';

const Input = styled.input<{
  $gridColumn: string;
  $gridRow: string;
  $isError: boolean;
}>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
  padding: 0.5rem;
  margin: 0.5rem;
  border: 0px;
  border-bottom: 3px solid ${props => props.theme.colors.secondary};
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  color: ${props => props.theme.colors.textLight};

  &:focus {
    transition: border-bottom 0.8s;
    border-bottom: 3px solid ${props => props.theme.colors.secondaryOn};
  }

  ${props => props.$isError && `border-bottom: 3px solid red`}
`;

interface InformationInputProps {
  type: string;
  maxLength: number;
  gridColumn: string;
  gridRow: string;
  isError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InformationInput({
  type,
  maxLength,
  gridColumn,
  gridRow,
  isError,
  onChange,
}: InformationInputProps) {
  return (
    <Input
      id={type}
      type={type}
      placeholder={`Please enter your ${type}`}
      maxLength={maxLength}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      $isError={isError}
      onChange={onChange}
    />
  );
}
