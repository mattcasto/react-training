import React from 'react';

import NavLink from '../NavLink';

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
              <NavLink to="/" activeClassName="active">Home</NavLink>
              <NavLink to="/about" activeClassName="active">About</NavLink>
              <NavLink to="/users" activeClassName="active">Users</NavLink>
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
