
import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import CardForm from '../components/cardForm';
import Loader from '../components/loader';
import Board from '../components/board';
import Icons from '../components/icons';
import Modal from '../components/modal';
import Card from '../components/card';
import RootContext from '../context';

import config from '../env';

const { card_api } = config;

const Header = styled.header`
background-color: ${props => props.theme.color.primary};
border-radius: ${props => props.theme.shape.radius};
padding: ${props => props.theme.shape.padding};
margin: ${props => props.theme.shape.margin};
color: ${props => props.theme.color.white};
justify-content: center;
font-weight: bold;
font-size: 1.5rem;
display: flex;
width: 100%;
`;

const CreateNewCard = styled.button`
background-color: ${props => props.theme.color.white};
border-radius: ${props => props.theme.shape.radius};
box-shadow: ${props => props.theme.shape.shadow};
padding: ${props => props.theme.shape.padding};
margin: ${props => props.theme.shape.margin};
animation: appear .3s ease;
justify-content: center;
flex-direction: column;
align-items: center;
min-height: 20rem;
max-width: 25rem;
cursor: pointer;
display: flex;
border: none;
width: 100%;

`;

const AddIcon = styled(Icons.plus)`
height: 100px;
width: 100px;
`;

const Label = styled.p`
color: ${props => props.theme.color.gray};
font-weight: bold;
`

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getCards = () => {
      Axios.get(card_api)
        .then(({ data }) => {
          this.context.toContext({ cards: data });
        })
        .catch(err => {
          console.log(err);
        });
    };
    this.giveHeart = ({ _id, hearts }) => {
      Axios.put(`${card_api}/${_id}`, { hearts: hearts + 1 })
        .then(res => {
          this.context.toContext({ cards: '' });
        })
        .catch(err => {
          console.log(err);
        });
    }
    this.createNewCard = () => {
      this.context.toContext({ modal: true });
    }
  }

  componentDidMount() {
    this.getCards();
  }

  componentDidUpdate() {
    const { cards } = this.context;
    if (!cards) this.getCards();
  }

  render() {
    const { cards } = this.context;
    const { modal } = this.state;
    return (
      <Board>
        {/* HEADER */}
        <Header>Kudo Board</Header>
        {/* CARDS */}
        {
          cards
          ? (
            <>
              <CreateNewCard onClick={this.createNewCard}>
                <AddIcon />
                <Label>add new</Label>
              </CreateNewCard>
              {cards.map(card => (
                <Card onClick={() => this.giveHeart(card)} key={card._id} data={card} />
              ))}
            </>
          )
          : <Loader />
        }
        <Modal visible={modal}>
          <CardForm />
        </Modal>
      </Board>
    );
  }
}

Home.contextType = RootContext;

export default Home;
