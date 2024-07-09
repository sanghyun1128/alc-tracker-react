import React, { useState } from 'react';

import styled from 'styled-components';

import InputStyle from '../styles/InputStyle';
import LabelStyle from '../styles/LabelStyle';
import TextButtonStyle from '../styles/TextButtonStyle';

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

const Button = styled(TextButtonStyle)``;

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
