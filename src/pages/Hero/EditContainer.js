import React from 'react'

import { connect } from 'react-redux';

import { EVENTS, URI, defaultHero } from '../../config/hero';
import Edit from '../../components/Hero/Edit';

class EditContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addHero = this.addHero.bind(this);
    this.init = this.init.bind(this);
  }

  init(data) {
    const { dispatch, params} = this.props;

    const hero = params.id ? data.filter(h => h.uuid === params.id)[0] : defaultHero();
    dispatch({ type: EVENTS.SELECT, hero: hero });
  }

  componentDidMount() {
    $.getJSON(URI, ((data) => this.init(data)));
  }

  addHero(newHero) {
    const {dispatch, router} = this.props;

    dispatch({ type: EVENTS.MODIFY, hero: newHero });
    dispatch({ type: EVENTS.SELECT, hero: defaultHero() });

    router.push('/heroes');
  }

  render() {
    return (<Edit hero={this.props.hero} params={this.props.params} addHero={this.addHero} />);
  }
}

export default connect(state => ({ hero: state.hero }))(EditContainer);
