import React from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import Users from '../Components/Users';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;

    dispatch({ type: 'INIT', users: list })
  }

  getUser(id = null) {
    let {dispatch} = this.props;

    let user = id === null ? { name: '', email: '' } : this.props.users[id];

    dispatch({ type: 'SELECT_USER', user: user });

    this.props.router.push(`/user/${id}`);
  }

  componentDidMount() {
    if (!this.props.users.length) {
      $.getJSON('http://scottpreston.github.io/html/data.json', ((data) => this.init(data.list)));
    }
  }

  render() {
    return (<Users users={this.props.users} getUser={this.getUser} />);
  }
}

export default connect(state => ({ users: state.users }))(UsersContainer);
