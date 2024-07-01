import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
  }
  to {
      opacity: 1;
      transform: translateZ(0);
  }
`;

export const shake = keyframes`
  0% {
      transform: translateX(0);
  }
  25% {
      transform: translateX(-5px);
  }
  50% {
      transform: translateX(5px);
  }
  75% {
      transform: translateX(-5px);
  }
  to {
      transform: translateX(0);
  }
`;
