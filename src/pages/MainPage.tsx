import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import {
  IconLabel,
  DotPagination,
  IconButton,
  CardView,
  EmptyView,
  ItemInputModal,
} from '../components';
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
    whiskeyCardList,
    cocktailCardList,
  ]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [itemInputModalOpen, setItemInputModalOpen] = useState<boolean>(false);
  const mainViewRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    if (mainViewRef.current && !isScrolling) {
      const newIndex = Math.round(
        mainViewRef.current.scrollTop / mainViewRef.current.clientHeight,
      );
      if (newIndex !== pageIndex) {
        setPageIndex(newIndex);
      }
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      if (mainViewRef.current) {
        mainViewRef.current.scrollTo({
          top: pageIndex * mainViewRef.current.clientHeight,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  const handleIconClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    navigate(`/${e.currentTarget.id}`);
  };

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
            <CardView
              key={index}
              arr={cardData[index]}
              numOfRows={5}
              numOfColumns={2}
              style={{}}
            />
          ),
        )}
      </MainViewSection>

      {itemInputModalOpen && (
        <ItemInputModal setModalOpen={setItemInputModalOpen} theme={theme} />
      )}

      <ControlSection>
        <IconButton
          icon="SETTING"
          onClick={handleIconClick}
          size={20}
          buttonColor="primary"
        />
        <IconButton
          icon="PLUS"
          onClick={() => setItemInputModalOpen(true)}
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
