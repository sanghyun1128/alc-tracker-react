import React from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { fadeIn } from '../animations/basicAnimations';
import CardView from '../components/CardView';
import DotPagination from '../components/DotPagination';
import EmptyView from '../components/EmptyView';
import IconButton from '../components/IconButton';
import IconLabel from '../components/IconLabel';
import TextLabel from '../components/TextLabel';
import { wineList } from '../const/dummy';
import { useTheme } from '../hooks/useTheme';

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

const MainViewSection = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary};
`;

const ControlSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export default function MainPage() {
  const [theme] = useTheme();
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
        <MainViewSection style={{ gridRow: '1 / 11', gridColumn: '2 / 11' }}>
          <IconLabel
            icon="WINE"
            size={30}
            style={{
              gridRow: '1 / 2',
              gridColumn: '1 / 2',
              backgroundColor: `${theme.colors.primary}`,
            }}
          />
          <TextLabel
            text="Wine"
            size="h2"
            style={{
              gridRow: '1 / 2',
              gridColumn: '2 / 3',
              color: `${theme.colors.textDark}`,
            }}
          />
          {/* <EmptyView
            theme={theme}
            style={{
              gridRow: '2 / 11',
              gridColumn: '1 / 11',
            }}
          /> */}
          <CardView
            arr={wineList}
            style={{ gridRow: '2 / 11', gridColumn: '1 / 11' }}
          />
        </MainViewSection>
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
