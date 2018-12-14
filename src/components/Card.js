import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
    const text = props.text
    let icon = props.emoji
    if (icon !== undefined) {
      icon = emoji.getUnicode(icon)
    }
    // const emoji = emoji.getUnicode(props.emoji);
    return (
      <div className="card card__content">
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{icon}</p>
      </div>
    )
  }


Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.shape,
};

export default Card;
