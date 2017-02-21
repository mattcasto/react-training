import React from 'react'

import { connect } from 'react-redux';

import { EVENTS, defaultHero } from '../../config/hero';
import Edit from '../../components/Hero/Edit';

class EditContainer extends React.Component {
  constructor(props) {
    super(props);

    this.addHero = this.addHero.bind(this);
  }

  addHero(newHero) {
    let {dispatch, router} = this.props;

    dispatch({ type: EVENTS.MODIFY, hero: newHero })
    dispatch({ type: EVENTS.SELECT, hero: defaultHero() })

    router.push('/heroes');
  }

  render() {
    return (<Edit {...this.props.hero} {...this.props.params} addHero={this.addHero} />);
  }
}

export default connect(state => ({ hero: state.hero }))(EditContainer);
