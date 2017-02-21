import React from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import { URI, EVENTS, defaultHero } from '../../config/hero'

import List from '../../components/Hero/List';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.getHero = this.getHero.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;

    dispatch({ type: EVENTS.LIST, heroes: list })
  }

  getHero(id = null) {
    let {dispatch, router, heroes} = this.props;

    let hero = id === null ? defaultHero() : heroes.filter(h => h.uuid === id)[0];

    dispatch({ type: EVENTS.SELECT, hero: hero });

    router.push(`/hero/${id === null ? '' : id}`);
  }

  componentDidMount() {
    if (!this.props.heroes.length) {
      $.getJSON(URI, ((data) => this.init(data)));
    }
  }

  render() {
    return (<List heroes={this.props.heroes} getHero={this.getHero} />);
  }
}

export default connect(state => ({ heroes: state.heroes }))(ListContainer);
