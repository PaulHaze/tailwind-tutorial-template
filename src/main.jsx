import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { Provider } from 'react-redux';
import store from './redux/store';

import './css/main.css';
import App from './App';

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
