import React from 'react';
import NewCardForm from '../NewCardForm';
import { shallow } from 'enzyme';


describe('newCardForm', () => {
  it('will match the newCardForm Snapshot', () => {
    const wrapper = shallow(<NewCardForm addCardCallback={() => {}}/>)
  });
})
