import React from 'react'

import { connect } from 'react-redux';

import UserDetail from '../components/UserDetail';

class UserDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {
    let {dispatch} = this.props;

    dispatch({ type: 'UPDATE_USER', user: newUser })
    dispatch({ type: 'SELECT_USER', user: { name: '', email: '' } })

    this.props.router.push('/users');
  }

  render() {
    return (<UserDetail user={this.props.user} addUser={this.addUser} id={this.props.params.userId} />);
  }
}

export default connect(state => ({ user: state.user }))(UserDetailContainer);
