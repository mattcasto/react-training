import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'

import Layout from './Pages/Layout'
import Index from './Pages/Index'
import About from './Pages/About'
import Users from './Pages/Users'
import UserDetail from './Pages/UserDetail'

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="about" component={About} />
      <Route path="users" component={Users} />
      <Route path="/user/:userId" component={UserDetail} />
    </Route>
  </Router>,
  app);