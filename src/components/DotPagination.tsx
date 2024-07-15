import React, { useState } from 'react';

import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Indicator = styled.button<{ $selected: boolean }>`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  background-color: ${props =>
    props.$selected
      ? props.theme.colors.primaryOn
      : props.theme.colors.primary};

  transition: background-color 0.3s ease-in-out;
`;

interface IndicatorProps {
  numOfPages: number;
  align: 'row' | 'column';
  style: React.CSSProperties;
}

export default function DotPagination({
  numOfPages,
  align = 'column',
  style,
}: IndicatorProps) {
  const [indicator, setIndicator] = useState<number>(0);

  const handleIndicatorClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setIndicator(+e.currentTarget.id);
    console.log(e.currentTarget);
  };

  return (
    <Container style={{ ...style, flexDirection: align }}>
      {[...Array(numOfPages)].map((_, index) => {
        if (index === indicator) {
          return <Indicator key={index} id={String(index)} $selected={true} />;
        }
        return (
          <Indicator
            key={index}
            id={String(index)}
            $selected={false}
            onClick={e => handleIndicatorClick(e)}
          />
        );
      })}
    </Container>
  );
}
