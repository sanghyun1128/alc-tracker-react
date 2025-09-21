import React from 'react';

import styled from 'styled-components';

const Button = styled.button<{
  size: 'small' | 'medium' | 'large';
  intent: 'primary' | 'secondary' | 'success' | 'warning';
}>`
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Box model */
  width: ${props => {
    switch (props.size) {
      case 'small':
        return '25%';
      case 'medium':
        return '50%';
      case 'large':
        return '100%';
      default:
        return '100%';
    }
  }};
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  margin: 0;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};

  /* Typography */
  font-size: 90%;
  font-weight: bold;
  text-decoration: none;

  /* Visuals */
  background-color: ${props => {
    switch (props.intent) {
      case 'primary':
        return props.theme.colors.primary;
      case 'secondary':
        return props.theme.colors.secondary;
      case 'success':
        return props.theme.colors.success;
      case 'warning':
        return props.theme.colors.warning;
      default:
        return props.theme.colors.primary;
    }
  }};
  color: ${props => {
    switch (props.theme.alt) {
      case 'light':
        return props.theme.colors.textReverse;
      case 'dark':
        return props.theme.colors.text;
    }
  }};

  /* Interaction */
  cursor: pointer;
  touch-action: manipulation;
  transition: all ${props => props.theme.transition};

  /* States */
  &:hover {
    filter: ${props => props.theme.hoverFilter};
    transform: scale(0.95);
  }

  &:active {
    transform: scale(1);
  }

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.focusBoxShadow};
  }
`;

interface SquareButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  size: 'small' | 'medium' | 'large';
  intent: 'primary' | 'secondary' | 'success' | 'warning';
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Square shaped button component
 *
 * @param {String} props.type button type (button, submit, reset)
 * @param {String} props.text text to be displayed on the button
 * @param {String} props.size size of the button (small, medium, large)
 * @param {String} props.intent intent of the button (primary, secondary, success, error, warning)
 * @param {Function} props.onClick function to be called on button click
 */
export default function SquareButton({
  type = 'button',
  text,
  size,
  intent,
  onClick,
}: SquareButtonProps) {
  return (
    <Button type={type} size={size} intent={intent} onClick={e => onClick(e)}>
      {text}
    </Button>
  );
}
