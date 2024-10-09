import React from 'react';

import styled from 'styled-components';

import { Icons, IconType } from '../../assets/svg';

const Button = styled.button<{ $buttonColor: string }>`
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.$buttonColor === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  transition: background-color ${props => props.theme.transition};

  &:hover {
    background-color: ${props =>
      props.$buttonColor === 'primary'
        ? props.theme.colors.primaryOn
        : props.theme.colors.secondaryOn};
  }
`;

interface IconButtonProps {
  icon: keyof typeof Icons;
  size: number;
  buttonColor: 'primary' | 'secondary';
  style?: React.CSSProperties;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * @param {IconButtonProps} props
 * @param {String} props.icon name of the icon to be displayed and used as the id of the button
 * @param {Number} props.size size of the icon
 * @param {String} props.buttonColor set button type 'primary' | 'secondary'
 * @param {Object} props.style React.CSSProperties to be applied to the icon
 * @param {Function} props.onClick function to be called when the button is clicked
 */
export default function IconButton({
  icon,
  size,
  buttonColor,
  style = {},
  onClick,
}: IconButtonProps) {
  const Icon = Icons[icon] as IconType;

  return (
    <Button
      type="button"
      id={String(icon).toLowerCase()}
      $buttonColor={buttonColor}
      style={style}
      onClick={e => onClick(e)}>
      <Icon width={size} height={size} />
    </Button>
  );
}
