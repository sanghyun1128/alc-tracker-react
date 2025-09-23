import React from 'react';

import { styled, keyframes } from 'styled-components';

const charReveal = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Text = styled.h3`
  font-weight: bold;
  font-family: inherit;
  margin: 0;
`;

const Char = styled.span<{ $delay: number }>`
  opacity: 0;
  display: inline-block;
  white-space: pre;
  animation: ${charReveal} 500ms ease-out forwards;
  animation-delay: ${props => props.$delay}ms;
`;

interface TextUpdateAnimationProps {
  text: string;
  as: React.ElementType;
}

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
