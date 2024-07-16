import React from 'react';

import styled from 'styled-components';

const Label = styled.h2`
  flex: 1 1 0;
  font-weight: bold;
  font-family: inherit;
`;

interface TextLabelProps {
  text: string;
  style: React.CSSProperties;
}

/**
 * @param {TextLabelProps} props
 * @param {String} props.text text to be displayed
 * @param {Object} props.style React.CSSProperties to be applied to the text
 */
export default function TextLabel({ text, style }: TextLabelProps) {
  return <Label style={style}>{text}</Label>;
}
