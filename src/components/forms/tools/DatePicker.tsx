import React from 'react';

import styled, { css } from 'styled-components';

import { shake } from '../../../animations/basicAnimations';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
`;

const Label = styled.label`
  flex: 1 1 0;
  font-weight: bold;
  font-family: inherit;
  grid-column: 1 / 2;
`;

const Input = styled.input<{
  $isError: boolean;
}>`
  grid-column: 2 / 7;
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

interface DatePickerProps {
  isError: boolean;
  labelText: string;
  style: React.CSSProperties;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

//TODO: Remake DatePicker with select dropdowns for day, month, and year
/**
 * @param {DatePickerProps} props
 * @param {Boolean} props.isError if the input is in an error state
 * @param {String} props.labelText the text to display as the label
 * @param {Object} props.style React.CSSProperties to be applied to the container
 * @param {Function} props.onChange function to be called when the input changes
 */
export default function DatePicker({
  isError,
  style,
  labelText,
  onChange,
}: DatePickerProps) {
  return (
    <Container style={style}>
      <Label htmlFor={labelText.toLowerCase()}>{labelText}</Label>
      <Input
        type="date"
        id={labelText.toLowerCase()}
        max="2077-12-31"
        min="1900-01-01"
        $isError={isError}
        onChange={onChange}
      />
    </Container>
  );
}
