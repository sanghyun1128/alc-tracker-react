import React, { useState } from 'react';

import styled from 'styled-components';

import InputStyle from '../styles/InputStyle';
import LabelStyle from '../styles/LabelStyle';
import TextButtonStyle from '../styles/TextButtonStyle';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Label = styled(LabelStyle)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

const Input = styled(InputStyle)`
  grid-column: 3 / 7;
  grid-row: 1 / 2;
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
  labelText: string;
  labelSize: string;
  labelColor: string;
  hideShowButton?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InformationInput({
  placeholder,
  maxLength,
  gridColumn,
  gridRow,
  isError,
  labelText,
  labelSize,
  labelColor,
  hideShowButton,
  onChange,
}: InformationInputProps) {
  const [showInput, setShowInput] = useState<boolean>(false);

  const toggleInputVisibility = () => {
    setShowInput(prevShowInput => !prevShowInput);
  };

  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Label
        htmlFor={labelText.toLowerCase()}
        style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <Input
        id={labelText.toLowerCase()}
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
