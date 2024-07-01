import React from 'react';

import styled from 'styled-components';

const Label = styled.label<{
  gridcolumn: string;
  gridrow: string;
}>`
  grid-column: ${props => props.gridcolumn};
  grid-row: ${props => props.gridrow};
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  color: ${props => props.theme.colors.primary};
`;

interface InformationLabelProps {
  text: string;
  gridcolumn: string;
  gridrow: string;
}

export default function InformationLabel({
  text,
  gridcolumn,
  gridrow,
}: InformationLabelProps) {
  return (
    <Label
      htmlFor={text.toLowerCase()}
      gridcolumn={gridcolumn}
      gridrow={gridrow}>
      {text}
    </Label>
  );
}
