import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { TextButton } from '../..';
import { shake } from '../../../animations/basicAnimations';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
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
  isError: boolean;
  hideShowButton: boolean;
  style: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @param {InformationInputProps} props
 * @param {String} props.placeholder placeholder text for the input field
 * @param {Number} props.maxLength maximum length of the input field
 * @param {Boolean} props.isError whether the input field is in an error state
 * @param {Boolean} props.hideShowButton whether to show a button to hide/show the input
 * @param {React.CSSProperties} props.style custom styles for the input field
 * @param {Function} props.onChange function to handle input changes
 */
export default function InformationInput({
  placeholder,
  maxLength,
  isError,
  hideShowButton,
  style,
  onChange,
}: InformationInputProps) {
  const [showInput, setShowInput] = useState<boolean>(false);

  const toggleInputVisibility = () => {
    setShowInput(prevShowInput => !prevShowInput);
  };

  return (
    <Container style={style}>
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
