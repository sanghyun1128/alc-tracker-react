import React, { useId, useState } from 'react';

import { styled } from 'styled-components';

import {
  fadeIn,
  fadeInBottomToCenter,
  fadeOut,
  fadeOutCenterToBottom,
} from '../../animations/basicAnimations';
import SquareButton from '../buttons/SquareButton';

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
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  /* Box model */
  width: min(420px, 85%);
  height: auto;
  padding: 0 ${props => props.theme.padding};
  border-radius: ${props => props.theme.borderRadius};

  /* Visuals */
  background-color: ${props => props.theme.colors.componentBackground};

  /* Animation */
  animation: ${props =>
      props.$isClosing ? fadeOutCenterToBottom : fadeInBottomToCenter}
    300ms ease forwards;
`;

const Header = styled.header`
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

const Message = styled.section`
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

const Footer = styled.footer`
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
  margin-top: ${props => props.theme.margin};
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
  const titleId = useId();
  const messageId = useId();

  const close = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  return (
    <Container $isClosing={isClosing}>
      <Modal
        $isClosing={isClosing}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={messageId}>
        <Header>
          <h3 id={titleId}>{title}</h3>
        </Header>
        <Message>
          <p id={messageId}>{message}</p>
        </Message>
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
