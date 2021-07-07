import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainLayout } from './layouts/MainLayout';

import store from './redux/store';

import './css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" render={() => <MainLayout />} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),
);
