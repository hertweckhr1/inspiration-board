import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     cards: [],
  //   };
  // }
  constructor(props) {
    super(props);
    const cardList = CARD_DATA.cards.map((card) => {
      return card;
    });

    this.state = {
      cardList,
    }
  }

  render() {

    const card = this.state.cardList.map((card, i) => {
      return <Card key={i}
              {...card} />
    })

    return (
      <div className="board">
        {card}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
