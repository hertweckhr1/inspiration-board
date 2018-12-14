import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

const URL = 'https://inspiration-board.herokuapp.com/boards/Ada-Lovelace/cards';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      alertMessage: "",
    };
  }
  // constructor(props) {
  //   super(props);
  //   const cardList = CARD_DATA.cards.map((card) => {
  //     return card;
  //   });
  //
  //   this.state = {
  //     cardList,
  //   }
  // }

  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      console.log('API get success!')
      // console.log(response);
      const cardList = response.data.map((card) => {
        return card;
      })
      console.log(cardList);
      this.setState({
        cards: cardList,
      })

    })
    .catch((error) => {
      console.log("error!");
      this.setState({
        alertMessage: error.message,
      })

    });
  }

  addCard = (newCard) => {

  }

  render() {
    // is there another way to write card.card by typing in before map first?
    const card = this.state.cards.map((card) => {
      return <Card key={card.card.id}
              text={card.card.text}
              emoji={card.card.emoji} />
    })

    return (
      <div className="board">
        <section><NewCardForm addCardCallback={this.addCard}/></section>
        <p>{this.state.alertMessage}</p>
        {card}
      </div>
    )
  }

}

Board.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Board;
