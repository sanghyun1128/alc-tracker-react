import { keyframes } from 'styled-components';

export const fadeInBottomToCenter = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const fadeOutCenterToBottom = keyframes`
    0% {
        opacity: 1;
        transform: translateZ(0);
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    to {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
`;

export const fadeInRightToCenter = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const shake = keyframes`
  0% {
      transform: translateX(0);
      animation-timing-function: ease-in;
  }
  25% {
      transform: translateX(-5px);
      animation-timing-function: ease-in-out;
  }
  50% {
      transform: translateX(5px);
      animation-timing-function: ease-in-out;
  }
  75% {
      transform: translateX(-5px);
      animation-timing-function: ease-in-out;
  }
  to {
      transform: translateX(0);
      animation-timing-function: ease-out;
  }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    to {
        opacity: 1;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
`;

export const fadeOut = keyframes`
    0% {
        opacity: 1;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
    to {
        opacity: 0;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    }
`;
