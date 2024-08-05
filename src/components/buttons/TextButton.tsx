import React from 'react';

import { styled } from 'styled-components';

const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`;

interface TextButtonProps {
  text: string;
  style: React.CSSProperties;
  onClick: () => void;
}

/**
 * @param {TextButtonProps} props
 * @param {String} props.text text to be displayed on the button
 * @param {Object} props.style React.CSSProperties to be applied to the button
 * @param {Function} props.onClick function to be called when the button is clicked
 */
export default function TextButton({ text, style, onClick }: TextButtonProps) {
  return (
    <Button type="button" style={style} onClick={onClick}>
      {text}
    </Button>
  );
}
