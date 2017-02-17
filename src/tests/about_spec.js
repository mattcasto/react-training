import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';

import Index from '../Pages/About'

const expected = 'Hello About';
describe('<About />', () => {
  it(`renders a div with ${expected}`, () => {
    const wrapper = render(<Index />)
    expect(wrapper.text()).to.contain(expected);
  });
});