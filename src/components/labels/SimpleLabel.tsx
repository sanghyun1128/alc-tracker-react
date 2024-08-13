import React from 'react';

import { styled } from 'styled-components';

const Label = styled.label`
  font-weight: bold;
  font-family: inherit;
`;

interface LabelProps {
  text: string;
  style: React.CSSProperties;
}

export default function SimpleLabel({ text, style }: LabelProps) {
  return <Label style={style}>{text}</Label>;
}
