import React from 'react';

import styled from 'styled-components';

import { ButtonStyle } from '../../styles';

const Button = styled(ButtonStyle)<{ $gridColumn: string; $gridRow: string }>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textDark};

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
  gridColumn: string;
  gridRow: string;
}

export default function SubmitButton({
  text,
  gridColumn,
  gridRow,
}: SubmitButtonProps) {
  return (
    <Button type="submit" $gridColumn={gridColumn} $gridRow={gridRow}>
      {text}
    </Button>
  );
}
