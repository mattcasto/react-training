import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <tr>
        <td><Link to={ `/user/${this.props.id}`}>{this.props.name}</Link></td>
        <td>{this.props.email}</td>
      </tr>
    )
  }
}