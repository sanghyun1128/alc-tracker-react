import React from 'react';

import styled, { css } from 'styled-components';

import { shake } from '../animations/basicAnimations';

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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InformationInput({
  type,
  placeholder,
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
      placeholder={placeholder}
      maxLength={maxLength}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      $isError={isError}
      onChange={onChange}
    />
  );
}
