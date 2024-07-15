import React from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { fadeIn } from '../animations/basicAnimations';
import DotPagination from '../components/DotPagination';
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
  display: grid;
  grid-template-columns: 0.5fr repeat(9, 1fr);
  grid-template-rows: repeat(10, 1fr);
  justify-content: center;
  align-items: center;
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
        <DotPagination
          numOfPages={3}
          align="column"
          style={{ gridRow: '1 / 11', gridColumn: '1 / 2' }}
        />
      </Body>

      <ControlSection>
        <IconButton
          icon="SETTING"
          onClick={handleIconClick}
          size={20}
          buttonColor="primary"
        />
        <IconButton
          icon="PLUS"
          onClick={handleIconClick}
          size={20}
          buttonColor="primary"
        />
        <IconButton
          icon="USER"
          onClick={handleIconClick}
          size={20}
          buttonColor="primary"
        />
      </ControlSection>
    </Container>
  );
}
