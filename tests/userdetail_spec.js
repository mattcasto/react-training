import 'jsdom-global/register'; // needed for mount to work

import React from 'react';
import sinon from 'sinon';

import { mount } from 'enzyme';
import { expect } from 'chai';

import UserDetail from '../src/Components/UserDetail'

describe('<UserDetail />', () => {
  it('has form that can submit.', () => {
    const wrapper = mount(<UserDetail />);

    const form = wrapper.find('form');
    expect(form.exists()).to.be.true;
    expect(form.prop('onSubmit')).to.exist;
  });

  it('has refs for name and email', () => {
    const wrapper = mount(<UserDetail />);

    expect(wrapper.ref('name').exists(), 'name').to.be.true;
    expect(wrapper.ref('email').exists(), 'email').to.be.true;
  });

  
  it(`adds {name: [ref=name], email: [ref=email]} on submit.`, () => {
    const expected = { name: 'Jon Snow', email: 'jon.snow@got.com' };

    // Arrange
    const spy = sinon.spy();
    const wrapper = mount(<UserDetail addUser={spy} />);

    // Act
    wrapper.ref('name').get(0).value = expected.name;
    wrapper.ref('email').get(0).value = expected.email;
    wrapper.find('form').simulate('submit');

    // Assert
    expect(spy.calledOnce).is.true;
    const actual = spy.args[0][0];
    expect(actual.name).to.equal(expected.name);
    expect(actual.email).to.equal(expected.email);
  });
});