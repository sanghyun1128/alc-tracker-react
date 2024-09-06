import React, { useState } from 'react';

import { DefaultTheme, styled } from 'styled-components';

import { IconButton, ItemInputForm, Selector } from '..';
import {
  fadeIn,
  fadeInBottomToCenter,
  fadeOut,
  fadeOutCenterToBottom,
} from '../../animations/basicAnimations';
import { Alcohol, AlcoholList } from '../../types/const';

const Container = styled.div<{ $isClosing: boolean }>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${props => (props.$isClosing ? fadeOut : fadeIn)} 1.3s;
`;

const Modal = styled.div<{ $isClosing: boolean }>`
  width: 80%;
  height: 90%;
  background-color: ${props => props.theme.colors.formBackground};
  border-radius: ${props => props.theme.borderRadius};
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr 8fr;
  align-items: center;
  justify-items: center;

  animation: ${props =>
      props.$isClosing ? fadeOutCenterToBottom : fadeInBottomToCenter}
    1.3s;
`;

interface ItemInputModalProps {
  setModalOpen: (arg: boolean) => void;
  theme: DefaultTheme;
}

export default function ItemInputModal({
  setModalOpen,
  theme,
}: ItemInputModalProps) {
  const [typeOfAlcohol, setTypeOfAlcohol] = useState<Alcohol>('WINE');
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false); // Close modal after animation ends
    }, 1300); // Match the duration of the animation
  };

  return (
    <Container $isClosing={isClosing}>
      <Modal $isClosing={isClosing}>
        <Selector
          id="selector"
          options={AlcoholList}
          style={{
            gridColumn: '1 / 3',
            gridRow: '1 / 2',
            width: '80%',
          }}
          onChange={e =>
            setTypeOfAlcohol(AlcoholList[+e.target.value] as Alcohol)
          }
        />
        <IconButton
          icon="CLOSE"
          size={20}
          buttonColor="primary"
          style={{ gridColumn: '10 / 11', gridRow: '1 / 2' }}
          onClick={closeModal}
        />
        <ItemInputForm
          inputType={typeOfAlcohol}
          style={{ gridColumn: '1 / 11', gridRow: '2 / 3' }}
          theme={theme}
        />
      </Modal>
    </Container>
  );
}
