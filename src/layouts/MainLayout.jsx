import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NavBar } from '../components';
import { routes } from '../routes';

export function MainLayout() {
  // generate routes programatically from the routes.js file
  const getRoutes = routes.map(prop => {
    return (
      <Route
        exact
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
      <Switch>{getRoutes}</Switch>
    </div>
  );
}
