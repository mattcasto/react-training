import React from 'react';
import { render, shallow } from 'enzyme';
import { expect } from 'chai';

import Users from '../Components/Users'

const expected = {name: 'Jon Snow', email: 'jon.snow@got.com'};
describe('Users component', () => {
  it(`renders a table with a row containing ${expected.name} and ${expected.email}.`, () => {
    const wrapper = render(<Users users={[expected]} />)

    expect(wrapper.text()).to.contain(expected.name);
    expect(wrapper.text()).to.contain(expected.email);
  });
});