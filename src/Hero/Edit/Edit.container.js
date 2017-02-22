import React from 'react'

import { connect } from 'react-redux';

import { EVENTS, URI, generator } from './Edit.config';
import Edit from './Edit.presenter';

class EditContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addHero = this.addHero.bind(this);
    this.init = this.init.bind(this);
  }

  init(data) {
    const { dispatch, params} = this.props;

    const hero = params.id ? data.filter(h => h.uuid === params.id)[0] : generator();
    dispatch({ type: EVENTS.SELECT, payload: hero });
  }

  componentDidMount() {
    fetch(URI, { 'method' : 'GET'})
      .then(response => response.json())
      .then(obj => this.init(obj));
  }

  addHero(newHero) {
    const {dispatch, router} = this.props;

    if (!newHero.uuid) {
      newHero.uuid = newHero.heroName.toLowerCase().replace(' ', '');
    }

    fetch(URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newHero)
    }).then(() => router.push('/heroes'));
  }

  render() {
    return (<Edit hero={this.props.hero} params={this.props.params} addHero={this.addHero} />);
  }
}

export default connect(state => ({ hero: state.hero }))(EditContainer);
