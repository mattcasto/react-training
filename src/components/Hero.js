import React from 'react';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.getHero(this.props.uuid);
  }

  render() {
    return (
      <tr>
        <td><a style={{cursor:'pointer'}} onClick={this.handleClick}>{this.props.heroName}</a></td>
        <td>{this.props.realName}</td>
        <td>{this.props.signedAccords}</td>
      </tr>
    )
  }
}
