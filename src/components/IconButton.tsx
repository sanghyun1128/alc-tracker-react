import React from 'react';

import styled from 'styled-components';

import { shake } from '../animations/basicAnimations';
import { Icons, IconType } from '../assets/svg';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.primaryOn};
    animation: ${shake} 0.5s;
  }
`;

interface IconButtonProps {
  icon: keyof typeof Icons;
  size: number;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * @param {IconButtonProps} props
 * @param {String} props.icon name of the icon to be displayed and used as the id of the button
 * @param {Number} props.size size of the icon
 * @param {Function} props.onClick function to be called when the button is clicked
 */
export default function IconButton({ icon, size, onClick }: IconButtonProps) {
  const Icon = Icons[icon] as IconType;

  return (
    <Button
      type="button"
      id={String(icon).toLowerCase()}
      onClick={e => onClick(e)}>
      <Icon width={size} height={size} />
    </Button>
  );
}
