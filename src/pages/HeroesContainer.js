import React from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import config from '../config/config';
import {defaultHero} from '../config/default'

import Heroes from '../components/Heroes';

class HeroesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.getHero = this.getHero.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;

    dispatch({ type: 'INIT', heroes: list })
  }

  getHero(id = null) {
    let {dispatch} = this.props;

    let hero = id === null ? defaultHero() : this.props.heroes.filter(h => h.uuid === id)[0];

    dispatch({ type: 'SELECT', hero: hero });

    this.props.router.push(`/hero/${id}`);
  }

  componentDidMount() {
    if (!this.props.heroes.length) {
      $.getJSON('https://ce3rt0e0yl.execute-api.us-east-1.amazonaws.com/prod/abbHeros', ((data) => this.init(data)));
    }
  }

  render() {
    return (<Heroes heroes={this.props.heroes} getHero={this.getHero} />);
  }
}

export default connect(state => ({ heroes: state.heroes }))(HeroesContainer);
