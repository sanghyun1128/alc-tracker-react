import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import CardView from '../components/CardView';
import DotPagination from '../components/DotPagination';
import EmptyView from '../components/EmptyView';
import IconButton from '../components/IconButton';
import IconLabel from '../components/IconLabel';
import {
  cocktailCardList,
  whiskeyCardList,
  wineCardList,
} from '../const/dummy';
import { useTheme } from '../hooks/useTheme';

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.07fr 1fr;
  grid-template-rows: 0.1fr 1fr 0.1fr;
  padding: 10px;
  margin: 0;
  width: 80vw;
  height: 90vh;
`;

const MainViewSection = styled.div`
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  border: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.secondary};
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ControlSection = styled.div`
  grid-row: 3 / 4;
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
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const mainViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainViewRef.current) {
      setIsScrolling(true);
      mainViewRef.current.scrollTo({
        top: pageIndex * mainViewRef.current.clientHeight,
        behavior: 'smooth',
      });
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pageIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (mainViewRef.current && !isScrolling) {
      const newIndex = Math.round(
        mainViewRef.current.scrollTop / mainViewRef.current.clientHeight,
      );
      if (newIndex !== pageIndex) {
        setPageIndex(newIndex);
      }
    }
  };

  const handleIconClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    navigate(`/${e.currentTarget.id}`);
  };

  return (
    <Container>
      <DotPagination
        numOfPages={3}
        align="column"
        page={pageIndex}
        setPage={setPageIndex}
        style={{ gridRow: '1 / 3', gridColumn: '1 / 2' }}
      />
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
      <MainViewSection ref={mainViewRef} onScroll={handleScroll}>
        {pageList.map((page, index) =>
          cardData[index].length === 0 ? (
            <EmptyView key={index} theme={theme} style={{}} />
          ) : (
            <CardView key={index} arr={cardData[index]} style={{}} />
          ),
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
