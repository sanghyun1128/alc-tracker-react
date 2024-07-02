import React from 'react';

import { styled } from 'styled-components';

const Button = styled.button<{
  $gridColumn: string;
  $gridRow: string;
  $justifyContent: string;
}>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
  display: flex;
  justify-content: ${props => props.$justifyContent};
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`;

interface TextButtonProps {
  text: string;
  textSize: string;
  textColor: string;
  gridColumn: string;
  gridRow: string;
  justifyContent: string;
  onClick: () => void;
}

export default function TextButton({
  text,
  textSize,
  textColor,
  gridColumn,
  gridRow,
  justifyContent,
  onClick,
}: TextButtonProps) {
  return (
    <Button
      type="button"
      style={{ fontSize: textSize, color: textColor }}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      $justifyContent={justifyContent}
      onClick={onClick}>
      {text}
    </Button>
  );
}
