
import styled from 'styled-components';
import React from 'react';

import Icons from './icons';

const calcBPM = ({ beat }) => ( beat ? 60 / beat : 0 );

const Heart = styled(Icons.heart)`
animation: pulse ${props => calcBPM(props)}s ease infinite;
margin: 0 .25rem 0 0;
height: 1rem;
width: 1rem;
`;

const StyledCard = styled.blockquote`
background-color: ${props => props.theme.color.white};
border-radius: ${props => props.theme.shape.radius};
box-shadow: ${props => props.theme.shape.shadow};
padding: ${props => props.theme.shape.padding};
margin: ${props => props.theme.shape.margin};
justify-content: space-between;
animation: appear .3s ease;
flex-direction: column;
min-height: 20rem;
max-width: 25rem;
cursor: pointer;
display: flex;
width: 100%;
`;

const Row = styled.section`
justify-content: space-between;
flex-direction: row;
display: flex;
`;

const Text = styled.p`
margin: ${props => props.theme.shape.margin};
`;

const Label = styled.span`
color: ${props => props.theme.color.primary};
text-transform: lowercase;
font-size: .875rem;
`;

const Name = styled(Text)`
color: ${props => props.theme.color.primary};
text-transform: capitalize;
font-weight: bold;
`;

const Message = styled(Text)`
padding: ${props => props.theme.shape.padding};
color: ${props => props.theme.color.darkGray};
font-size: 1.25rem;
`;

const Count = styled(Text)`
color: ${props => props.theme.color.error};
`

const Card = ({ data: { recipient, message, hearts, sender }, ...rest }) => (
  <StyledCard {...rest}>
  {/* HEADER */}
    <Row>
      <Name><Label>to: </Label>{recipient}</Name>
    </Row>
    {/* MESSAGE */}
    <Row>
      <Message>"{message}"</Message>
    </Row>
    {/* FOOTER */}
    <Row>
      <Count><Heart beat={hearts}/>{hearts}</Count>
      <Name><Label>from: </Label>{sender}</Name>
    </Row>
  </StyledCard>
)

export default Card;
