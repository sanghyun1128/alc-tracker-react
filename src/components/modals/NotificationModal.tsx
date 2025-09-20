import React, { useState } from 'react';

import { styled } from 'styled-components';

import {
  fadeIn,
  fadeInBottomToCenter,
  fadeOut,
  fadeOutCenterToBottom,
} from '../../animations/basicAnimations';
import SquareButton from '../buttons/SquareButton';
import HeadingLabel from '../labels/HeadingLabel';

//TODO: animation 최적화 필요
const Container = styled.div<{ $isClosing: boolean }>`
  /* Layout */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Box model / positioning */
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* Visuals */
  background-color: ${props => props.theme.colors.dim};

  /* Interaction */
  pointer-events: ${props => (props.$isClosing ? 'none' : 'auto')};

  /* Animation */
  animation: ${props => (props.$isClosing ? fadeOut : fadeIn)} 300ms ease
    forwards;
`;

const Modal = styled.div<{ $isClosing: boolean }>`
  /* Layout */
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  /* Box model */
  width: min(420px, 85%);
  height: 200px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius};

  /* Visuals */
  background-color: ${props => props.theme.colors.componentBackground};

  /* Animation */
  animation: ${props =>
      props.$isClosing ? fadeOutCenterToBottom : fadeInBottomToCenter}
    300ms ease forwards;
`;

const Header = styled.div`
  /* Layout */
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Box model */
  width: 100%;
  height: 100%;
`;

const Body = styled.div`
  /* Layout */
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Box model */
  width: 100%;
  height: 100%;
`;

const Footer = styled.div`
  /* Layout */
  grid-row: 3 / 4;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Box model */
  width: 100%;
  height: 100%;
  margin-bottom: ${props => props.theme.margin};
`;

interface NotificationModalProps {
  title: string;
  message: string;
  confirmText: string;
  onClose: () => void;
}

/**
 * NotificationModal component to display alert messages.
 *
 * @param {String} props.title title of the modal
 * @param {String} props.message message to be displayed in the modal
 * @param {String} props.confirmText text to be displayed on the confirm button
 * @param {Function} props.onClose function to be called when the modal is closed
 */
export default function NotificationModal({
  title,
  message,
  confirmText,
  onClose,
}: NotificationModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const close = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  return (
    <Container $isClosing={isClosing} role="dialog" aria-modal="true">
      <Modal $isClosing={isClosing}>
        <Header>
          <HeadingLabel text={title} size={'h2'} type={'dark'} />
        </Header>
        <Body>
          <HeadingLabel text={message} size={'h3'} type={'dark'} />
        </Body>
        <Footer>
          <SquareButton
            text={confirmText}
            size="medium"
            intent="warning"
            onClick={close}
          />
        </Footer>
      </Modal>
    </Container>
  );
}
