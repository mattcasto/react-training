import React from 'react';

import { Link } from 'react-router';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/users" activeClassName="active">Users</Link></li>
              <li><Link to="/user/" activeClassName="active">Add User</Link></li>
            </ul>
          </nav>
        </header>
        <section className="container-fluid">
          {this.props.children}
        </section>
      </div>
    );
  }
}

