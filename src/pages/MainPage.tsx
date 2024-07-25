import React, { useCallback, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import { fadeIn, fadeOut } from '../animations/basicAnimations';
import CardView from '../components/CardView';
import DotPagination from '../components/DotPagination';
import EmptyView from '../components/EmptyView';
import IconButton from '../components/IconButton';
import IconLabel from '../components/IconLabel';
import TextLabel from '../components/TextLabel';
import {
  cocktailCardList,
  whiskeyCardList,
  wineCardList,
} from '../const/dummy';
import { useTheme } from '../hooks/useTheme';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.07fr 1fr;
  grid-template-rows: 1fr 0.1fr;
  padding: 10px;
  margin: 0;
  width: 80vw;
  height: 90vh;
`;

const MainViewSection = styled.div<{ $scrollProgress: number }>`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
  justify-items: center;
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary};
  animation: ${props => (props.$scrollProgress === 500 ? fadeOut : fadeIn)} 0.5s
    ease-in-out;
`;

const ControlSection = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export default function MainPage() {
  const [theme] = useTheme();
  const navigate = useNavigate();
  const pageList = [
    ['WINE', 'Wine'],
    ['WHISKEY', 'Whiskey'],
    ['COCKTAIL', 'Cocktail'],
  ];
  const [cardData, setCardData] = useState([
    wineCardList,
    [],
    cocktailCardList,
  ]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(500);

  const handleIconClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    navigate(`/${e.currentTarget.id}`);
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    // e.preventDefault();
    const delta = e.deltaY > 0 ? 1 : -1;
    setScrollProgress(prev => Math.min(Math.max(prev + delta * 10, 0), 1000));
  }, []);

  useEffect(() => {
    if (scrollProgress >= 1000) {
      setPageIndex(prevIndex =>
        prevIndex < pageList.length - 1 ? prevIndex + 1 : 0,
      );
      setTimeout(() => {
        setScrollProgress(500);
      }, 1000);
    } else if (scrollProgress <= 0) {
      setScrollProgress(500);
      setPageIndex(prevIndex =>
        prevIndex > 0 ? prevIndex - 1 : pageList.length - 1,
      );
      setTimeout(() => {
        setScrollProgress(500);
      }, 1000);
    }
    console.log(scrollProgress);
  }, [scrollProgress]);

  return (
    <Container>
      <DotPagination
        numOfPages={3}
        align="column"
        page={pageIndex}
        setPage={setPageIndex}
        style={{ gridRow: '1 / 2', gridColumn: '1 / 2' }}
      />
      <MainViewSection onWheel={handleWheel} $scrollProgress={scrollProgress}>
        <IconLabel
          icon={pageList[pageIndex][0]}
          size={30}
          style={{
            gridRow: '1 / 2',
            gridColumn: '1 / 2',
            backgroundColor: `${theme.colors.primary}`,
            borderRadius: '50%',
            padding: '10px',
          }}
        />
        <TextLabel
          text={pageList[pageIndex][1]}
          size="h2"
          style={{
            gridRow: '1 / 2',
            gridColumn: '2 / 3',
            color: `${theme.colors.textDark}`,
          }}
        />
        {cardData[pageIndex].length === 0 ? (
          <EmptyView
            theme={theme}
            style={{ gridRow: '2 / 11', gridColumn: '1 / 11' }}
          />
        ) : (
          <CardView
            arr={cardData[pageIndex]}
            style={{ gridRow: '2 / 11', gridColumn: '1 / 11' }}
          />
        )}
      </MainViewSection>

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
