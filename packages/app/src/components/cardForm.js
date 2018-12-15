
import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import RootContext from '../context';
import config from '../env';

const { card_api } = config;

const Form = styled.form`
`;

const Label = styled.p`
color: ${props => props.theme.color.primary};
margin: ${props => props.theme.shape.margin};
text-transform: capitalize;
font-weight: bold;
`;

const Input = styled.input`
border-radius: ${props => props.theme.shape.radius};
padding: ${props => props.theme.shape.padding};
font-size: ${props => props.theme.font.size};
border: ${props => props.theme.shape.border};
display: inline-block;
width: 100%;
`;

const Button = styled.button`
background-color: ${props => props.theme.color.primary};
border-radius: ${props => props.theme.shape.radius};
padding: ${props => props.theme.shape.padding};
border: ${props => props.theme.shape.border};
margin: ${props => props.theme.shape.margin};
color: ${props => props.theme.color.white};
text-transform: uppercase;
font-weight: bold;
`;

const Fieldset = styled.fieldset`
all: unset;
margin: ${props => props.theme.shape.margin};
display: block;
border: none;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeModal = () => {
      this.context.toContext({ modal: false });
    };
    this.submitForm = async (e) => {
      e.preventDefault();
      await Axios.post(card_api, this.state)
        .then(() => {
          this.context.toContext({ cards: '' });
        })
        .catch(err => {
          console.log(err);
        });
      this.setState({ sender: '', recipient: '', message: '' });
    };
  }

  render () {
    const { sender, recipient, message } = this.state;
    return (
      <Form onSubmit={this.submitForm}>
        <Fieldset>
          <Label>your name</Label>
          <Input 
            placeholder="Vader"
            value={sender}
            onChange={e => this.setState({ sender: e.target.value })}
          />
        </Fieldset>
        <Fieldset>
          <Label>your message</Label>
          <Input 
            placeholder="I'm your father!"
            value={message}
            onChange={e => this.setState({ message: e.target.value })}
          />
        </Fieldset>
        <Fieldset>
          <Label>your recipient</Label>
          <Input 
            placeholder="Luke"
            value={recipient}
            onChange={e => this.setState({ recipient: e.target.value })}
          />
        </Fieldset>
        <Button
          disabled={(!sender || !recipient || !message)}
        >
          sumbit
        </Button>
      </Form>
    )
  }
}

Modal.contextType = RootContext;

export default Modal;
