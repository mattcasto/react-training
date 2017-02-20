import React from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

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

    let hero = id === null ? { name: '', email: '' } : this.props.heroes[id];

    dispatch({ type: 'SELECT', hero: hero });

    this.props.router.push(`/hero/${id}`);
  }

  componentDidMount() {
    if (!this.props.heroes.length) {
      $.getJSON('http://scottpreston.github.io/html/data.json', ((data) => this.init(data.list)));
    }
  }

  render() {
    return (<Heroes heroes={this.props.heroes} getHero={this.getHero} />);
  }
}

export default connect(state => ({ heroes: state.heroes }))(HeroesContainer);
