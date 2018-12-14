import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';
// WHY IS MY POST FROM POSTMAN NOT WORKING? SI SE PUEDE
const Card = (props) => {
    const text = props.text;
    const id = props.id;
    let icon = props.emoji
    if (icon !== null) {
      icon = emoji.getUnicode(icon)
    }
    // const emoji = emoji.getUnicode(props.emoji);
    return (
      <div className="card card__content">
        <p className="card__content-text">{text}</p>
        <p className="card__content-emoji">{icon}</p>
        <button
        className="card__delete"
        onClick={() => {props.deleteCardCallback(props.id)}}
        >Delete Note</button>

      </div>
    )
  }

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
