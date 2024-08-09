import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { Icons } from '../assets/svg';
import { useOnClickOutside } from '../hooks/useOnClickOutSide';

const Container = styled.div<{ $gridColumn: string; $gridRow: string }>`
  grid-column: ${props => props.$gridColumn};
  grid-row: ${props => props.$gridRow};

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  margin: 0;
`;

const Label = styled.label`
  flex: 1 1 0;
  font-weight: bold;
  font-family: inherit;
  grid-column: 1 / 2;
`;

const SelectContainer = styled.div`
  grid-column: 2 / 7;
  position: relative;
  margin: 0;
  width: 100%;
`;

const SelectTrigger = styled.div`
  grid-column: 2 / 7;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0;
  color: ${props => props.theme.colors.textDark};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
`;

const SelectOptionList = styled.ul<{
  $isOpen: boolean;
}>`
  grid-column: 2 / 7;

  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0px 8px 8px 0px;
  border-top: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondaryOn};
  list-style: none;

  max-height: ${({ $isOpen }) => ($isOpen ? '150px' : '0px')};
  overflow: hidden;
  transition: max-height 1s cubic-bezier(0.16, 1, 0.3, 1);
`;

const SelectOption = styled.li`
  grid-column: 2 / 7;

  width: 100%;
  padding: 10px;
  color: ${props => props.theme.colors.textDark};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const ArrowIcon = styled(Icons.ARROW_LEFT).attrs({
  width: 20,
  height: 20,
})<{ $isOpen: boolean }>`
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-90deg)' : 'rotate(0deg)')};
  transition: transform 0.3s;
`;

interface SelectorProps {
  gridColumn: string;
  gridRow: string;
  labelText: string;
  labelSize: string;
  labelColor: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Selector({
  gridColumn,
  gridRow,
  labelText,
  labelSize,
  labelColor,
  options,
  onChange,
}: SelectorProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const selectorRef = useRef<HTMLDivElement>(null);
  const id = labelText.toLowerCase();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useOnClickOutside({
    ref: selectorRef,
    handler: () => {
      setIsOpen(false);
    },
  });

  useEffect(() => {
    const event = {
      target: {
        id,
        value: String(selectedOption),
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
  }, [selectedOption, onChange, id]);

  return (
    <Container $gridColumn={gridColumn} $gridRow={gridRow} ref={selectorRef}>
      <Label htmlFor={id} style={{ fontSize: labelSize, color: labelColor }}>
        {labelText}
      </Label>
      <SelectContainer>
        <SelectTrigger onClick={toggleDropdown}>
          {options[selectedOption]}
          <ArrowIcon $isOpen={isOpen} />
        </SelectTrigger>

        <SelectOptionList $isOpen={isOpen}>
          {options.map((option, index) => (
            <SelectOption key={index} onClick={() => handleOptionClick(index)}>
              {option}
            </SelectOption>
          ))}
        </SelectOptionList>
      </SelectContainer>
    </Container>
  );
}
