import React from 'react';

import { styled } from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

export default function NavigationBar() {
  return (
    <Container>
      <div>Footer</div>
    </Container>
  );
}
