import 'jsdom-global/register'; // needed for mount to work

import React from 'react';
import sinon from 'sinon';

import { mount } from 'enzyme';
import { expect } from 'chai';

import UserDetail from '../../src/components/UserDetail'

describe('<UserDetail />', () => {
  it('has form that can submit.', () => {
    const wrapper = mount(<UserDetail user={{name:'', email:''}} />);

    const form = wrapper.find('form');
    expect(form.exists()).to.be.true;
    expect(form.prop('onSubmit')).to.exist;
  });

  it('has refs for name and email', () => {
    const wrapper = mount(<UserDetail user={{name:'', email:''}} />);

    expect(wrapper.ref('name').exists(), 'name').to.be.true;
    expect(wrapper.ref('email').exists(), 'email').to.be.true;
  });

  
  it(`adds {name: [ref=name], email: [ref=email]} on submit.`, () => {
    const expected = { name: 'Jon Snow', email: 'jon.snow@got.com' };

    // Arrange
    const spy = sinon.spy();
    const wrapper = mount(<UserDetail user={{name:'', email:''}} addUser={spy} />);

    // Act
    const name = wrapper.ref('name'),
          email = wrapper.ref('email'),
          form = wrapper.find('form');
    
    name.get(0).value = expected.name;
    name.simulate('change');
    email.get(0).value = expected.email;
    email.simulate('change');
    form.simulate('submit');

    // Assert
    expect(spy.calledOnce).is.true;
    const actual = spy.args[0][0];
    expect(actual.name).to.equal(expected.name);
    expect(actual.email).to.equal(expected.email);
  });
});