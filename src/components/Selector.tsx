import React, { useState } from 'react';

import styled from 'styled-components';

import { Icons } from '../assets/svg';
import { LabelStyle } from '../styles';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};
`;

const Label = styled(LabelStyle)`
  grid-column: 1 / 2;
`;

const SelectContainer = styled.div`
  grid-column: 2 / 7;
  width: 100%;
  position: relative;
  margin: 0 auto;
`;

const SelectTrigger = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`;

const SelectOptionList = styled.ul`
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  border-top: none;
  border-radius: 0 0 5px 5px;
  background-color: #fff;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SelectOption = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const ArrowIcon = styled(Icons.ARROW_LEFT).attrs({
  width: 20,
  height: 20,
})``;

interface SelectorProps {
  gridColumn: string;
  gridRow: string;
  labelText: string;
  labelSize: string;
  labelColor: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Selector({
  gridColumn,
  gridRow,
  labelText,
  labelSize,
  labelColor,
  options,
  onChange,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow}>
      <Label
        htmlFor={labelText.toLowerCase()}
        style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <SelectContainer>
        <SelectTrigger onClick={toggleDropdown}>
          {selectedOption}
          <ArrowIcon />
        </SelectTrigger>
        {isOpen && (
          <SelectOptionList>
            {options.map((option, index) => (
              <SelectOption
                key={index}
                onClick={() => handleOptionClick(option)}>
                {option}
              </SelectOption>
            ))}
          </SelectOptionList>
        )}
      </SelectContainer>
    </Container>
  );
}
