import React, { useState } from 'react';

import styled from 'styled-components';

import { InputStyle, TextButtonStyle } from '../styles';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Input = styled(InputStyle)`
  grid-column: 1 / 7;
  grid-row: 1 / 2;
  margin: 0;
`;

const Button = styled(TextButtonStyle)`
  grid-column: 6 / 7;
  grid-row: 1 / 2;
  justify-self: end;
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

export function InformationInput({
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
        <Button type="button" onClick={toggleInputVisibility}>
          {showInput ? 'Hide' : 'Show'}
        </Button>
      )}
    </Container>
  );
}
