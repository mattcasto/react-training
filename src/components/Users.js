import React from 'react';
import { Link } from 'react-router';

import User from './User';

export default class Users extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(event) {
    this.props.getUser();
  }

  render() {
    return (
      <section>
        <div className="row">
          <h2 className="col-md-2">Users</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <span className="col-md-1">Name</span>
                <button onClick={this.handleAdd} className="btn btn-xs btn-success col-md-1">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  &nbsp;Add
                </button>
              </th>
              <th><span className="col-md-1">Email</span></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((p, i) => (<User key={i} id={i} name={p.name} email={p.email} getUser={this.props.getUser} />))}
          </tbody>
        </table>
      </section>
    );
  }
}
