import $ from 'jquery';
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
      users: []
    };
  }

  componentDidMount() {
    let self = this;

    $.getJSON('http://scottpreston.github.io/html/data.json', ((data) => self.setState({ users: data.list })));
  }

  addUser(user) {
    let self = this;

    let users = self.state.users.concat([user]);
    self.setState({ users });
  }

  render() {
    let clone = React.cloneElement(this.props.children, {
      users: this.state.users,
      addUser: this.addUser.bind(this)
    })
    return (
      <div>
        <header>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>
        </header>
        <section className="container-fluid">
          {clone}
        </section>
      </div>
    );
  }
}