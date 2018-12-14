import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
    const { text, emoji } = props;
    return (
      <div className="card">
        <p>{text}</p>
        <p>{emoji}</p>
      </div>
    )
  }


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.shape,
};

export default Card;
