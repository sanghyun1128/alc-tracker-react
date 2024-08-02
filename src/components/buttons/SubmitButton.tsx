import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: auto;
  min-height: 3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  margin: 0;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textDark};
  position: relative;
  text-decoration: none;
  cursor: pointer;
  touch-action: manipulation;
  transition: all 250ms;

  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.theme.colors.primaryOn};
  }

  &:active {
    transform: translateY(0);
  }
`;

interface SubmitButtonProps {
  text: string;
  style: React.CSSProperties;
}

/**
 * @param {SubmitButtonProps} props
 * @param {String} props.text text to be displayed on the button
 * @param {Object} props.style React.CSSProperties to be applied to the button
 */
export default function SubmitButton({ text, style }: SubmitButtonProps) {
  return (
    <Button type="submit" style={style}>
      {text}
    </Button>
  );
}
