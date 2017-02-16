import React from 'react'

import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import UserDetail from '../Components/UserDetail';

class UserDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let {dispatch} = this.props;

    dispatch({ type: 'ADD_USER', user: newUser })

    hashHistory.push('/users');
  }

  render() {
    return (<UserDetail user={this.props.user} addUser={this.addUser} />);
  }
}

export default connect(state => ({ user: state.user }))(UserDetailContainer);