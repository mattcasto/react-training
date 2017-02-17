import 'jsdom-global/register';
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';

import UserDetail from '../Components/UserDetail'

const expected = {name: 'Jon Snow', email: 'jon.snow@got.com'};
describe('UserDetail component', () => {
  it(`submits a form with a name: ${expected.name} and email: ${expected.email}.`, () => {
    // Arrange
    const addUserSpy = sinon.spy();
    const form = mount(<UserDetail addUser={addUserSpy} />);

    // Act
    form.find('#name').get(0).value = expected.name;
    form.find('#email').get(0).value = expected.email;
    form.find('form').simulate('submit');

    // Assert
    expect(addUserSpy).to.have.property('callCount', 1);
    const call = addUserSpy.getCall(0);
    expect(call.args[0].name).to.equal(expected.name);
    expect(call.args[0].email).to.equal(expected.email);
  });
});