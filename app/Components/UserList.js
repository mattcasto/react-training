import React from 'react';
import User from './User';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let i = 0;
    return (
      <section>
        <h2>Users</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(p => (<User key={i++} name={p.name} email={p.email} />))}
          </tbody>
        </table>
      </section>
    );
  }
}