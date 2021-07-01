import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { NavBar } from '../components';

import { Spring, Transition, Framer } from '../views';

export function MainLayout() {
  // const location = useLocation();
  return (
    <div className="flex">
      <NavBar />
      <Switch>
        <Route path="/spring">
          <Spring />
        </Route>
        <Route path="/framer">
          <Framer />
        </Route>
        <Route path="/">
          <Transition />
        </Route>
      </Switch>
    </div>
  );
}
