import React from 'react';

import styled from 'styled-components';

import ButtonStyle from '../styles/ButtonStyle';

const Button = styled(ButtonStyle)<{
  gridcolumn: string;
  gridrow: string;
}>`
  grid-column: ${props => props.gridcolumn};
  grid-row: ${props => props.gridrow};
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
  gridcolumn: string;
  gridrow: string;
}

export default function SubmitButton({
  text,
  gridcolumn,
  gridrow,
}: SubmitButtonProps) {
  return (
    <Button type="submit" gridcolumn={gridcolumn} gridrow={gridrow}>
      {text}
    </Button>
  );
}
