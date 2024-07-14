import React from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { fadeIn } from '../animations/basicAnimations';
import IconButton from '../components/IconButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  animation: ${fadeIn} 5s;
`;

const Body = styled.div`
  flex-grow: 1;
  margin: 10px;
`;

const ControlSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
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
      <Body>
        <IconButton icon="WINE" onClick={handleIconClick} size={30} />
        <IconButton icon="WHISKEY" onClick={handleIconClick} size={30} />
        <IconButton icon="COCKTAIL" onClick={handleIconClick} size={30} />
      </Body>

      <ControlSection>
        <IconButton icon="SETTING" onClick={handleIconClick} size={20} />
        <IconButton icon="PLUS" onClick={handleIconClick} size={20} />
        <IconButton icon="USER" onClick={handleIconClick} size={20} />
      </ControlSection>
    </Container>
  );
}
