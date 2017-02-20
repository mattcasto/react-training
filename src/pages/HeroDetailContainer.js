import React from 'react'

import { connect } from 'react-redux';

import HeroDetail from '../components/HeroDetail';

class HeroDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addHero = this.addHero.bind(this);
  }

  addHero(newHero) {
    let {dispatch} = this.props;

    dispatch({ type: 'UPDATE', hero: newHero })
    dispatch({ type: 'SELECT', hero: { name: '', email: '' } })

    this.props.router.push('/heroes');
  }

  render() {
    return (<HeroDetail hero={this.props.hero} addHero={this.addHero} id={this.props.params.id} />);
  }
}

export default connect(state => ({ hero: state.hero }))(HeroDetailContainer);
