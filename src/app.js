import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducers';
import Layout from './pages/shared/_Layout';
import Index from './pages/Index';
import About from './pages/About';
import Heroes from './pages/HeroesContainer';
import HeroDetail from './pages/HeroDetailContainer';

const store = createStore(reducer);
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
        <Route path="heroes" component={Heroes} />
        <Route path="hero/(:id)" component={HeroDetail} />
      </Route>
    </Router>
  </Provider>,
  app);