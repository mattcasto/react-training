import React from 'react';
import $ from 'jquery';
import UserList from '../Components/UserList';
import UserForm from '../Components/UserForm';

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let self = this;

    $.getJSON('http://scottpreston.github.io/html/data.json', ((data) => self.setState({users:data.list})));
  }

  addUser(user) {
    let self = this;

    let users = self.state.users.concat([user]);
    self.setState({users});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-2 col-md-offset-1">
          <UserList users={this.state.users} />
        </div>
        <div className="col-md-8">
          <UserForm addUser={this.addUser.bind(this)} />
        </div>
      </div>
    );
  }
}