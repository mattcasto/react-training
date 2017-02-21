import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(event) {
    this.props.getHero();
  }

  render() {
    return (
      <section>
        <div className="row">
          <h2 className="col-md-2">Heroes</h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                <span className="col-md-2">Hero Name</span>
                <button onClick={this.handleAdd} className="btn btn-xs btn-success col-md-1">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  &nbsp;Add
                </button>
              </th>
              <th><span className="col-md-3">Real Name</span></th>
              <th><span className="col-md-1">Signed</span></th>
            </tr>
          </thead>
          <tbody>
            {this.props.heroes.map((p) => (<Hero key={p.uuid} {...p} getHero={this.props.getHero} />))}
          </tbody>
        </table>
      </section>
    );
  }
}

const Hero = ({getHero, uuid, heroName, realName, signedAccords}) => {
  const handleClick = (event) => {
    event.preventDefault();
    getHero(uuid);
  }

  return (
    <tr>
      <td><a style={{ cursor: 'pointer' }} onClick={handleClick}>{heroName}</a></td>
      <td>{realName}</td>
      <td>{signedAccords}</td>
    </tr>);
}
