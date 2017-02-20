import React from 'react';

import NavLink from './NavLink';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand" activeClassName="active">App</Link>
              </div>
              <ul className="nav navbar-nav">
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/heroes" activeClassName="active">Users</NavLink>
              </ul>
            </div>
          </nav>
        </header>
        <section className="container-fluid">
          <div className="starter-template">
            <h1> React App Starter w/Bootstrap</h1>
            <p className="lead">Use this as a sample.</p>
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}
