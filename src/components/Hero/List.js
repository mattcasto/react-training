import React from 'react';
import { Link } from 'react-router';

export default class extends React.Component {
  constructor(props) {
    super(props);
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
                <Link to="/hero/" className="btn btn-xs btn-success col-md-1">
                  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                  &nbsp;Add
                </Link>
              </th>
              <th><span className="col-md-3">Real Name</span></th>
              <th><span className="col-md-1">Signed</span></th>
            </tr>
          </thead>
          <tbody>
            {this.props.heroes.map((p) => (<Hero key={p.uuid} {...p} />))}
          </tbody>
        </table>
      </section>
    );
  }
}

const Hero = ({uuid, heroName, realName, signedAccords}) => (
  <tr>
    <td><Link to={`/hero/${uuid}`}>{heroName}</Link></td>
    <td>{realName}</td>
    <td>{signedAccords}</td>
  </tr>);
