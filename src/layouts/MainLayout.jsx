import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { NavBar } from '../components';

import { Home } from '../views';

export function MainLayout() {
  // const location = useLocation();
  return (
    <div className="flex">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
