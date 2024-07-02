import React from 'react';

import styled from 'styled-components';

const Label = styled.label<{
  $gridColumn: string;
  $gridRow: string;
}>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
  font-weight: bold;
  font-family: inherit;
`;

interface InformationLabelProps {
  text: string;
  textSize: string;
  textColor: string;
  gridColumn: string;
  gridRow: string;
}

export default function InformationLabel({
  text,
  textSize,
  textColor,
  gridColumn,
  gridRow,
}: InformationLabelProps) {
  return (
    <Label
      htmlFor={text.toLowerCase()}
      $gridColumn={gridColumn}
      $gridRow={gridRow}
      style={{ fontSize: textSize, color: textColor }}>
      {text}
    </Label>
  );
}
