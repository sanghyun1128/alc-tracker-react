import styled from 'styled-components';

const TextButtonStyle = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
`;

export default TextButtonStyle;
