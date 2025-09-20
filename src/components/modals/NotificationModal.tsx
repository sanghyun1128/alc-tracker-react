import React, { useState } from 'react';

import { styled } from 'styled-components';

import {
  fadeIn,
  fadeInBottomToCenter,
  fadeOut,
  fadeOutCenterToBottom,
} from '../../animations/basicAnimations';
import IconButton from '../buttons/IconButton';
import TextButton from '../buttons/TextButton';

interface NotificationModalProps {
  title?: string;
  message: string;
  confirmText?: string;
  onClose: () => void;
}

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

  animation: ${props => (props.$isClosing ? fadeOut : fadeIn)} 300ms ease;
`;

const Modal = styled.div<{ $isClosing: boolean }>`
  width: min(420px, 85%);
  background-color: ${props => props.theme.colors.componentBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 16px 16px 12px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto;
  gap: 8px;

  animation: ${props =>
      props.$isClosing ? fadeOutCenterToBottom : fadeInBottomToCenter}
    300ms ease;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const Message = styled.p`
  margin: 0;
  grid-column: 1 / 3;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const Footer = styled.div`
  grid-column: 1 / 3;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export default function NotificationModal({
  title = '알림',
  message,
  confirmText = '확인',
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
        <Title>{title}</Title>
        <IconButton
          icon="CLOSE"
          size={18}
          buttonColor="transparent"
          onClick={close}
        />
        <Message>{message}</Message>
        <Footer>
          <TextButton text={confirmText} onClick={close} style={{}} />
        </Footer>
      </Modal>
    </Container>
  );
}
