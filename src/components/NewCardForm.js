import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]


class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: '',
    }
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: '',
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    // const { text, emoji } = this.state;

    console.log(event);
    this.props.addCardCallback(this.state);
    this.resetState();
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  render () {
    const populateOptions = EMOJI_LIST.map((option) => {
      return <option value={option}>{option}</option>
    });


    return (
      <form onSubmit={this.onSubmit} name="new-card-form" className="new-card-form">
        <h2 className="new-card-form__header">Add an Inspiration</h2>
        <div>
          <label className="new-card-form__form-label" htmlFor="text">Name</label>
          <input name="text" placeholder="text" onChange={this.onFormChange} value={this.state.text} />
        </div>
        <div>
          <label className="new-card-form__form-label" htmlFor="Emoji">Emoji</label>
          <input name="species" placeholder="species" onChange={this.onFormChange} value={this.state.emoji} />
        </div>
        <div>
          <select value={this.state.value} onChange={this.onFormChange}>
            {populateOptions}
          </select>
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  };
}

export default NewCardForm;
