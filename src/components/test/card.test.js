import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('card', () => {
  it('will match the card snapshot', () => {
    const wrapper = shallow( <Card key={1}
            id={1}
            text="Woo hoo!"
            emoji="heart_eyes"
            deleteCardCallback={() => {}} />)

    expect(wrapper).toMatchSnapshot();
  });
})
