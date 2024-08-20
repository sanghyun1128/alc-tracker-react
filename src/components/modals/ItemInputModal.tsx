import React, { useState } from 'react';

import { styled } from 'styled-components';

import { IconButton, SubmitButton, ItemInputForm, Selector } from '..';
import { Alcohol, AlcoholList } from '../../types/const';

const Container = styled.div`
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
`;

const Modal = styled.div`
  width: 80%;
  height: 90%;
  background-color: ${props => props.theme.colors.formBackground};
  border-radius: ${props => props.theme.borderRadius};
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr 8fr 1fr;
  align-items: center;
  justify-items: center;
`;

interface ItemInputModalProps {
  setModalOpen: (arg: boolean) => void;
}

export default function ItemInputModal({ setModalOpen }: ItemInputModalProps) {
  const [typeOfAlcohol, setTypeOfAlcohol] = useState<Alcohol>('WINE');

  return (
    <Container>
      <Modal>
        <Selector
          labelText={''}
          labelSize={''}
          labelColor={''}
          options={AlcoholList}
          style={{ gridColumn: '1 / 5', gridRow: '1 / 2' }}
          onChange={e => setTypeOfAlcohol(e.target.value as Alcohol)}
        />
        <IconButton
          icon="CLOSE"
          size={20}
          buttonColor="primary"
          style={{ gridColumn: '10 / 11', gridRow: '1 / 2' }}
          onClick={() => setModalOpen(false)}
        />
        <ItemInputForm
          inputType={typeOfAlcohol}
          style={{ gridColumn: '1 / 11', gridRow: '2 / 3' }}
        />
        <SubmitButton
          text="Add Item"
          style={{ gridColumn: '5 / 7', gridRow: '3 / 4' }}
        />
      </Modal>
    </Container>
  );
}
