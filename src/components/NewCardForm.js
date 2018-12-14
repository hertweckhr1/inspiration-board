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
    const populateOptions = EMOJI_LIST.map((option, i) => {
      return <option key={i} value={option}>{emoji.getUnicode(option)}</option>
    });

    return (
      <form onSubmit={this.onSubmit} name="new-card-form" className="new-card-form">
        <h2 className="new-card-form__header">Add an Inspiration</h2>
        <div>
          <label className="new-card-form__form-label" htmlFor="text">Name:</label>
          <input name="text" className="new-card-form__form-textarea" placeholder="text" onChange={this.onFormChange} value={this.state.text} />
        </div>
        <div>
          <label className="new-card-form__form-label" htmlFor="select">Emoji: </label>
          <select className="new-card-form__form-select" name="emoji" value={this.state.value} onChange={this.onFormChange}>
            {populateOptions}
          </select>
        </div>
        <input className="btn btn-success new-card-form__form-button" type="submit" name="submit" value="Submit" />
      </form>
    );
  };
}

export default NewCardForm;
