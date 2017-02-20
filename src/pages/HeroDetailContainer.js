import React from 'react'

import { connect } from 'react-redux';

import { defaultHero } from '../config/default';
import HeroDetail from '../components/HeroDetail';

class HeroDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addHero = this.addHero.bind(this);
  }

  addHero(newHero) {
    let {dispatch} = this.props;

    dispatch({ type: 'UPDATE', hero: newHero })
    dispatch({ type: 'SELECT', hero: defaultHero() })

    this.props.router.push('/heroes');
  }

  render() {
    return (<HeroDetail {...this.props.hero} addHero={this.addHero} />);
  }
}

export default connect(state => ({ hero: state.hero }))(HeroDetailContainer);
