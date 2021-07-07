import React from 'react';
import { Home, Test } from './views';

export const routes = [
  {
    path: '/',
    key: 'home',
    label: 'Home',
    component: <Home />,
  },
  {
    path: '/test',
    key: 'test',
    label: 'Test',
    component: <Test />,
  },
];
