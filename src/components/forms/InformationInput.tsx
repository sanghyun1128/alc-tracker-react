import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { TextButton } from '.';
import { shake } from '../animations/basicAnimations';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Input = styled.input<{
  $isError: boolean;
}>`
  grid-column: 1 / 7;
  grid-row: 1 / 2;
  margin: 0;
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
  placeholder: string;
  maxLength: number;
  gridColumn: string;
  gridRow: string;
  isError: boolean;
  hideShowButton?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InformationInput({
  placeholder,
  maxLength,
  gridColumn,
  gridRow,
  isError,
  hideShowButton,
  onChange,
}: InformationInputProps) {
  const [showInput, setShowInput] = useState<boolean>(false);

  const toggleInputVisibility = () => {
    setShowInput(prevShowInput => !prevShowInput);
  };

  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Input
        id={placeholder.toLowerCase()}
        type={hideShowButton && !showInput ? 'password' : 'text'}
        placeholder={placeholder}
        maxLength={maxLength}
        $isError={isError}
        onChange={onChange}
      />
      {hideShowButton && (
        <TextButton
          text={showInput ? 'Hide' : 'Show'}
          style={{
            gridColumn: '6 / 7',
            gridRow: '1 / 2',
            justifySelf: 'flex-end',
          }}
          onClick={toggleInputVisibility}
        />
      )}
    </Container>
  );
}
