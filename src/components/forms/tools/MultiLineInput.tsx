import React from 'react';

import { styled } from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background-color: ${props => props.theme.colors.secondary};
  padding: 10px;
  justify-self: center;
  align-self: center;
  color: ${props => props.theme.colors.textDark};

  &:focus {
    outline: none;
  }
`;

interface MultiLineInputProps {
  placeholder: string;
  style?: React.CSSProperties;
}

/**
 * @param {MultiLineInputProps} props
 * @param {String} props.placeholder the text to display as the placeholder
 * @param {React.CSSProperties} props.style the style of the input
 */
export default function MultiLineInput({
  placeholder,
  style = {},
}: MultiLineInputProps) {
  return <TextArea placeholder={placeholder} style={style} />;
}