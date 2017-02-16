import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Layout from './Pages/Layout';
import Index from './Pages/Index';
import About from './Pages/About';
import Users from './Pages/UsersContainer';
import UserDetail from './Pages/UserDetailContainer';

const store = createStore(reducer);
const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
        <Route path="users" component={Users} />
        <Route path="/user/(:userId)" component={UserDetail} />
      </Route>
    </Router>
  </Provider>,
  app);