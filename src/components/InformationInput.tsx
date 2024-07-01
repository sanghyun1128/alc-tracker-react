import React from 'react';

import styled from 'styled-components';

const Input = styled.input<{
  gridcolumn: string;
  gridrow: string;
}>`
  grid-column: ${props => props.gridcolumn};
  grid-row: ${props => props.gridrow};
  padding: 0.5rem;
  margin: 0.5rem;
  border: 0px;
  border-bottom: 3px solid ${props => props.theme.colors.secondary};
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  font-weight: bold;
  font-family: inherit;
  color: ${props => props.theme.colors.textLight};

  &:focus {
    transition: border-bottom 0.8s;
    border-bottom: 3px solid ${props => props.theme.colors.secondaryOn};
  }
`;

interface InformationInputProps {
  type: string;
  gridcolumn: string;
  gridrow: string;
}

export default function InformationInput({
  type,
  gridcolumn,
  gridrow,
}: InformationInputProps) {
  return (
    <Input
      id={type}
      type={type}
      placeholder={`Please enter your ${type}`}
      gridcolumn={gridcolumn}
      gridrow={gridrow}
    />
  );
}
