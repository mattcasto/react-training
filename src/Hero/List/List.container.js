import React from 'react';
import $ from 'jquery';

import { connect } from 'react-redux';

import { URI, EVENTS, defaultHero } from '../config'

import List from './List.presenter';

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;

    dispatch({ type: EVENTS.LIST, heroes: list })
  }

  componentDidMount() {
    if (!this.props.heroes.length) {
      $.getJSON(URI, ((data) => this.init(data)));
    }
  }

  render() {
    return (<List heroes={this.props.heroes} />);
  }
}

export default connect(state => ({ heroes: state.heroes }))(ListContainer);
