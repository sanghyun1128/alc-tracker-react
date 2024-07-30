import React from 'react';

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
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  style: React.CSSProperties;
}

/**
 * @param {IndicatorProps} props
 * @param {Number} props.numOfPages number of pages to be displayed
 * @param {String} props.align direction of the pagination
 * @param {Number} props.page current page
 * @param {Function} props.setPage function to set the current page
 * @param {Object} props.style React.CSSProperties to be applied to the container
 */
export default function DotPagination({
  numOfPages,
  align = 'column',
  page,
  setPage,
  style,
}: IndicatorProps) {
  const handleIndicatorClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setPage(+e.currentTarget.id);
  };

  return (
    <Container style={{ ...style, flexDirection: align }}>
      {[...Array(numOfPages)].map((_, index) => {
        if (index === page) {
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
