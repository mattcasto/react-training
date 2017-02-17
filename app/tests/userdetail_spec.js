import 'jsdom-global/register'; // needed for mount to work

import React from 'react';
import sinon from 'sinon';

import { mount } from 'enzyme';
import { expect } from 'chai';

import UserDetail from '../Components/UserDetail'

const expected = {name: 'Jon Snow', email: 'jon.snow@got.com'};
describe('<UserDetail />', () => {
  it(`submits a form with a name: ${expected.name} and email: ${expected.email}.`, () => {
    // Arrange
    const spy = sinon.spy();
    const form = mount(<UserDetail addUser={spy} />);

    // Act
    form.find('#name').get(0).value = expected.name;
    form.find('#email').get(0).value = expected.email;
    form.find('form').simulate('submit');

    // Assert
    expect(spy.calledOnce);
    const actual = spy.args[0][0];
    expect(actual.name).to.equal(expected.name);
    expect(actual.email).to.equal(expected.email);
  });
});