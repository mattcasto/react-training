import React from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import Users from '../Components/Users';

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;

    dispatch({ type: 'INIT', users: list })
  }

  componentDidMount() {
    if (!this.props.users.length) {
      $.getJSON('http://scottpreston.github.io/html/data.json', ((data) => this.init(data.list)));
    }
  }

  render() {
    return (<Users users={this.props.users} />);
  }
}

export default connect(state => ({ users: state.users }))(UsersContainer);