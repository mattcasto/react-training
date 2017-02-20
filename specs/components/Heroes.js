import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';

import Heroes from '../../src/components/Heroes'

const expected = {name: 'Jon Snow', email: 'jon.snow@got.com'};
describe('<Heroes />', () => {
  it(`renders a table with a row containing ${expected.name} and ${expected.email}.`, () => {
    const wrapper = render(<Heroes heroes={[expected]} />)

    expect(wrapper.text()).to.contain(expected.name);
    expect(wrapper.text()).to.contain(expected.email);
  });
});