import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MainLayout } from './layouts/MainLayout';

import store from './redux/store';

import './css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <MainLayout />
      </Router>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),
);
