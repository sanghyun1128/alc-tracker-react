import React from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { fadeIn } from '../animations/basicAnimations';
import IconButton from '../components/IconButton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  animation: ${fadeIn} 5s;
`;

export default function MainPage() {
  const navigate = useNavigate();

  const handleIconClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    navigate(`/my/${e.currentTarget.id}`);
  };

  return (
    <Container>
      <IconButton icon="WINE" onClick={handleIconClick} size={100} />
      <IconButton icon="WHISKEY" onClick={handleIconClick} size={100} />
      <IconButton icon="COCKTAIL" onClick={handleIconClick} size={100} />
    </Container>
  );
}
