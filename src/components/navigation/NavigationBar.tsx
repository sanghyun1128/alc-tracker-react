import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { DefaultTheme, styled } from 'styled-components';

import { HeadingLabel, IconButton, IconLabel, ItemInputModal } from '..';
import { shake, slideLeft, slideRight } from '../../animations/basicAnimations';

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

const MenuContainer = styled.div<{ menuOpen: boolean }>`
  position: absolute;
  bottom: 72px;
  left: 0px;
  width: 150px;
  background-color: ${props => props.theme.colors.formBackground};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius} 0 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  animation: ${props => (props.menuOpen ? slideRight : slideLeft)} 0.3s ease-out
    forwards;
`;

const MenuItem = styled.button`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  margin: 5px 0;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryOn};
  }
`;

const SearchBarContainer = styled.div<{ searchBarOpen: boolean }>`
  position: absolute;
  bottom: 72px;
  right: -318px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.formBackground};
  padding: 9px;
  border-radius: ${props => props.theme.borderRadius}
    ${props => props.theme.borderRadius} 0 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  animation: ${props => (props.searchBarOpen ? slideLeft : slideRight)} 0.3s
    ease-out forwards;
`;

const SearchInput = styled.input`
  width: 300px;
  border: none;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;
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
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [searchBarOpen, setSearchBarOpen] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  // For handle menu opening and closing
  useEffect(() => {
    if (menuOpen) {
      setShowMenu(true);
    } else {
      const timeoutId = setTimeout(() => {
        setShowMenu(false);
      }, 300); // Match the duration of the slideDown animation (0.3s)

      return () => clearTimeout(timeoutId);
    }
  }, [menuOpen]);

  // For handle search bar opening and closing
  useEffect(() => {
    if (searchBarOpen) {
      setShowSearchBar(true);
    } else {
      const timeoutId = setTimeout(() => {
        setShowSearchBar(false);
      }, 300); // Match the duration of the slideDown animation (0.3s)

      return () => clearTimeout(timeoutId);
    }
  }, [searchBarOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  return (
    <Container>
      <IconButton
        icon={menuOpen ? 'CLOSE' : 'MENU'}
        size={20}
        buttonColor="secondary"
        onClick={toggleMenu}
        style={{ gridColumn: '1 / 2' }}
      />

      {/* Render the sliding menu when showMenu is true */}
      {showMenu && (
        <MenuContainer menuOpen={menuOpen}>
          <MenuItem onClick={() => navigate('/my')}>
            <IconLabel icon="USER" size={20} />
            <HeadingLabel text="My Page" size="h3" type="dark" />
          </MenuItem>
          <MenuItem onClick={() => navigate('/')}>
            <IconLabel icon="LOGOUT" size={20} />
            <HeadingLabel text="Logout" size="h3" type="dark" />
          </MenuItem>
          <MenuItem onClick={toggleTheme}>
            <HeadingLabel text="Theme" size="h3" type="dark" />
          </MenuItem>
        </MenuContainer>
      )}

      {/* PLUS button for /main path */}
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
          {itemInputModalOpen && (
            <ItemInputModal
              setModalOpen={setItemInputModalOpen}
              theme={theme}
            />
          )}
        </DynamicPathContainer>
      )}

      {/* Render the search bar when showSearchBar is true */}
      {showSearchBar && (
        <SearchBarContainer searchBarOpen={searchBarOpen}>
          <SearchInput placeholder="Search..." autoFocus />
        </SearchBarContainer>
      )}

      <IconButton
        icon={searchBarOpen ? 'CLOSE' : 'SEARCH'}
        size={20}
        buttonColor="secondary"
        style={{ gridColumn: '3 / 4' }}
        onClick={toggleSearchBar}
      />
    </Container>
  );
}
