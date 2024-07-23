import React from 'react';

import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: bold;
  font-family: inherit;
`;

const H2 = styled.h2`
  font-weight: bold;
  font-family: inherit;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-family: inherit;
`;

interface TextLabelProps {
  text: string;
  size: 'h1' | 'h2' | 'h3';
  style: React.CSSProperties;
}

/**
 * @param {TextLabelProps} props
 * @param {String} props.text text to be displayed
 * @param {String} props.size size of the text 'h1' | 'h2' | 'h3'
 * @param {Object} props.style React.CSSProperties to be applied to the text
 */
export default function TextLabel({ text, size, style }: TextLabelProps) {
  if (size === 'h1') return <H1 style={style}>{text}</H1>;
  else if (size === 'h2') return <H2 style={style}>{text}</H2>;
  else return <H3 style={style}>{text}</H3>;
}
