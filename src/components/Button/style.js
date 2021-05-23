import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
export const Button = styled.button`
  color: ${props => props.color ? props.color : '#143c8d'};
  background-color: ${props => props.background ? props.background : 'transparent'};
  font-weight: 700;
  font-size: 14px;
  margin: 0;
  padding: ${props => props.paddingY ? `${props.paddingY}px 30px` : '10px 30px'};
  border: ${props => props.border ? `2px solid ${props.border}` : 'none'};
  border-radius: 30px;
  cursor: pointer;
`;