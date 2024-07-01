import React from 'react';

import styled from 'styled-components';

const Label = styled.label<{
  $gridColumn: string;
  $gridRow: string;
}>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  color: ${props => props.theme.colors.primary};
`;

interface InformationLabelProps {
  text: string;
  gridColumn: string;
  gridRow: string;
}

export default function InformationLabel({
  text,
  gridColumn,
  gridRow,
}: InformationLabelProps) {
  return (
    <Label
      htmlFor={text.toLowerCase()}
      $gridColumn={gridColumn}
      $gridRow={gridRow}>
      {text}
    </Label>
  );
}
