import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
      </Switch>
    </Layout>
  );
}

export default ContentRouter;
