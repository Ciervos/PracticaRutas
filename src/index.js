import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/index';
import Team from './pages/Team/index';
import Product from './pages/Product/index';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/carousel/:site" component={Team}/>
    <Route exact path="/producto/:site/:id" component={Product}/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
