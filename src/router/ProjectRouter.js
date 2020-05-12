import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Routes from './Routes';
import Board from '../app/pages/board';
import Backlog from '../app/pages/backlog';
import Layout from './../app/layout/Layout';

const ContentRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path={Routes.Board.getFullPath()}
          exact
          component={Board} />

        <Route
          path={Routes.Backlog.getFullPath()}
          exact
          component={Backlog} />

        <Redirect path={Routes.Project.getFullPath()} exact to={Routes.Board.getFullPath()} />
      </Switch>
    </Layout>
  );
}

export default ContentRouter;
