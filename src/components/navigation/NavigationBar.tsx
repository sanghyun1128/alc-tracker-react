import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { IconButton } from '..';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

interface NavigationBarProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export default function NavigationBar({
  theme,
  toggleTheme,
}: NavigationBarProps) {
  const navigate = useNavigate();
  const currentLocation = useLocation().pathname;

  const handleIconClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    navigate(`/${e.currentTarget.id}`);
  };

  return (
    <Container>
      <IconButton
        icon={theme.alt === 'light' ? 'SUN' : 'MOON'}
        size={20}
        buttonColor={'primary'}
        onClick={toggleTheme}
        style={{ gridColumn: '1 / 2' }}
      />

      {currentLocation === '/main' && (
        <IconButton
          icon="PLUS"
          onClick={handleIconClick}
          size={20}
          buttonColor="primary"
          style={{ gridColumn: '5 / 7' }}
        />
      )}

      <IconButton
        icon="USER"
        onClick={handleIconClick}
        size={20}
        buttonColor="primary"
        style={{ gridColumn: '10 / 11' }}
      />
    </Container>
  );
}
