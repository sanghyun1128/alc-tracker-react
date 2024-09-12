import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { IconButton, ItemInputModal } from '..';
import { shake } from '../../animations/basicAnimations';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.formBackground};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const DynamicPathContainer = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  animation: ${shake} 0.5s ease-in-out;
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
  const [itemInputModalOpen, setItemInputModalOpen] = useState<boolean>(false);

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
        buttonColor="secondary"
        onClick={toggleTheme}
        style={{ gridColumn: '1 / 2' }}
      />

      {currentLocation === '/main' && (
        <DynamicPathContainer>
          <IconButton
            icon="PLUS"
            onClick={() => setItemInputModalOpen(true)}
            size={20}
            buttonColor="primary"
            style={{
              gridColumn: '5 / 7',
              width: '90%',
              borderRadius: '10px',
            }}
          />
          <IconButton
            icon="SEARCH"
            onClick={() => setItemInputModalOpen(true)}
            size={20}
            buttonColor="primary"
            style={{ gridColumn: '7 / 8', justifySelf: 'start' }}
          />
          {itemInputModalOpen && (
            <ItemInputModal
              setModalOpen={setItemInputModalOpen}
              theme={theme}
            />
          )}
        </DynamicPathContainer>
      )}

      <IconButton
        icon="USER"
        onClick={handleIconClick}
        size={20}
        buttonColor="secondary"
        style={{ gridColumn: '3 / 4' }}
      />
    </Container>
  );
}
