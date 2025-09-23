import React from 'react';

import { styled, keyframes } from 'styled-components';

const charReveal = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Text = styled.h3`
  /* Typography */
  font-family: inherit;
  font-weight: bold;

  /* Box model */
  margin: 0;
`;

const Char = styled.span<{ $delay: number }>`
  /* Layout */
  display: inline-block;

  /* Visuals */
  opacity: 0;

  /* Typography */
  white-space: pre;

  /* Animation */
  animation: ${charReveal} 500ms ease-out forwards;
  animation-delay: ${props => props.$delay}ms;
`;

interface TextUpdateAnimationProps {
  text: string;
  as: React.ElementType;
}

/**
 * TextUpdateAnimation animates the appearance of text by revealing each character
 * with a slight delay, creating a staggered effect.
 *
 * @param {TextUpdateAnimationProps} props
 * @param {String} props.text - The text to animate.
 * @param {React.ElementType} props.as - The HTML element or React component to render the text as.
 */
export default function TextUpdateAnimation({
  text,
  as,
}: TextUpdateAnimationProps) {
  const stagger = 25;
  const chars = Array.from(text);

  return (
    <Text as={as} aria-live="polite">
      {chars.map((ch, i) => (
        <Char key={`${ch}-${i}`} $delay={i * stagger}>
          {ch}
        </Char>
      ))}
    </Text>
  );
}
