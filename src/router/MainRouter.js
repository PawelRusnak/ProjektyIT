import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Routes from './Routes';

import Login from '../app/pages/home/Login';
import Dashboard from '../app/pages/home/Dashboard';
import ProjectRouter from './ProjectRouter';

const Router = () => {
  return (
    <Switch>
      <Route
        path={Routes.Login.getFullPath()}
        exact
        component={Login} />

      <Redirect path={Routes.Root.getFullPath()} exact to={Routes.Login.getFullPath()} />
      <Route path={Routes.Dashboard.getFullPath()} component={Dashboard} />
      <Route path="*" component={ProjectRouter} />
    </Switch>
  );
}

export default Router;
