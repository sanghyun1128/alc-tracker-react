import React from 'react';

import styled from 'styled-components';

const H1 = styled.h1<{ $type: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: inherit;
  margin: 0;
  color: ${props =>
    props.$type === 'light'
      ? props.theme.colors.textLight
      : props.theme.colors.textDark};
`;

const H2 = styled.h2<{ $type: string }>`
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  margin: 0;
  color: ${props =>
    props.$type === 'light'
      ? props.theme.colors.textLight
      : props.theme.colors.textDark};
`;

const H3 = styled.h3<{ $type: string }>`
  font-size: 0.9rem;
  font-weight: bold;
  font-family: inherit;
  margin: 0;
  color: ${props =>
    props.$type === 'light'
      ? props.theme.colors.textLight
      : props.theme.colors.textDark};
`;

interface HeadingLabelProps {
  text: string;
  size: 'h1' | 'h2' | 'h3';
  type: 'light' | 'dark';
  style?: React.CSSProperties;
}

/**
 * @param {TextLabelProps} props
 * @param {String} props.text text to be displayed
 * @param {String} props.size size of the text 'h1' | 'h2' | 'h3'
 * @param {String} props.type color of the text 'light' | 'dark'
 * @param {Object} props.style React.CSSProperties to be applied to the text
 */
export default function HeadingLabel({
  text,
  size,
  type,
  style = {},
}: HeadingLabelProps) {
  switch (size) {
    case 'h1':
      return (
        <H1 $type={type} style={style}>
          {text}
        </H1>
      );
    case 'h2':
      return (
        <H2 $type={type} style={style}>
          {text}
        </H2>
      );
    default:
      return (
        <H3 $type={type} style={style}>
          {text}
        </H3>
      );
  }
}
