import React from 'react';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.getHero(this.props.id);
  }

  render() {
    return (
      <tr>
        <td><button onClick={this.handleClick}>{this.props.name}</button></td>
        <td>{this.props.email}</td>
      </tr>
    )
  }
}
