
import styled from 'styled-components';
import React from 'react';

const StyledBoard = styled.main`
background-color: ${props => props.theme.color.lightGray};
padding: ${props => props.theme.shape.padding};
justify-content: center;
align-items: flex-start;
min-height: 100vh;
flex-wrap: wrap;
display: flex;
`;

const Board = ({ children, ...rest }) => (
  <StyledBoard {...rest}>
    {children}
  </StyledBoard>
)

export default Board;
