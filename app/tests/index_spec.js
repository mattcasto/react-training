import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import Users from '../Pages/Index'

const expected = 'Hello Index';
describe('Index component', () => {
  it(`renders a div with ${expected}`, () => {
    const wrapper = render(<Users />)
    expect(wrapper.text()).to.contain(expected);
  });
});