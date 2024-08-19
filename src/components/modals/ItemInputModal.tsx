import React, { useState } from 'react';

import { styled } from 'styled-components';

import { Alcohol } from '../../types/const';
import IconButton from '../buttons/IconButton';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ItemInputModalProps {
  setModalOpen: (arg: boolean) => void;
}

export default function ItemInputModal({ setModalOpen }: ItemInputModalProps) {
  const [typeOfAlcohol, setTypeOfAlcohol] = useState<Alcohol>('WINE');

  return (
    <Container>
      <IconButton
        icon="CLOSE"
        size={20}
        buttonColor="secondary"
        style={{}}
        onClick={() => setModalOpen(false)}
      />
    </Container>
  );
}
