import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { NavBar } from '../components';

import { Home } from '../views';

import { routes } from '../routes';

export function MainLayout() {
  // generate routes programatically from the routes.js file
  const getRoutes = routes.map(prop => {
    return (
      <Route
        // path={prop.layout + prop.path}
        path={prop.path}
        render={() => <prop.component />}
        key={prop.key}
      />
    );
  });
  return (
    <div className="flex">
      <NavBar routes={routes} />
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        {getRoutes}
      </Switch>
    </div>
  );
}
