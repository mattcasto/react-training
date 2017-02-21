import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducers';
import Layout from './components/shared/_Layout';
import Index from './pages/Index';
import About from './pages/About';
import HeroList from './pages/Hero/ListContainer';
import HeroEdit from './pages/Hero/EditContainer';

const store = createStore(reducer);
const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
        <Route path="heroes" component={HeroList} />
        <Route path="hero/(:id)" component={HeroEdit} />
      </Route>
    </Router>
  </Provider>,
  app);