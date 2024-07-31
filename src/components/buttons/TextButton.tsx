import React from 'react';

import { styled } from 'styled-components';

import { TextButtonStyle } from '../../styles';

const Button = styled(TextButtonStyle)<{
  $gridColumn: string;
  $gridRow: string;
  $justifyContent: string;
}>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
  justify-content: ${props => props.$justifyContent};
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
