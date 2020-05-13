import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Routes from './Routes';
import Board from '../app/pages/board';
import Backlog from '../app/pages/backlog';
import Layout from './../app/layout/Layout';
import Raports from '../app/pages/raports';
import Task from '../app/pages/task';
import User from '../app/pages/user';
import Team from '../app/pages/team';
import Structure from '../app/pages/structure';
import Timesheet from '../app/pages/timesheet';

const ContentRouter = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path={Routes.Board.getFullPath()} exact component={Board} />
        <Route
          path={Routes.Backlog.getFullPath()} exact component={Backlog} />
        <Route
          path={Routes.Raports.getFullPath()} exact component={Raports} />
        <Route
          path={Routes.Task.getFullPath()} exact component={Task} />
        <Route
          path={Routes.User.getFullPath()} exact component={User} />
        <Route
          path={Routes.Team.getFullPath()} exact component={Team} />
        <Route
          path={Routes.Structure.getFullPath()} exact component={Structure} />
        <Route
          path={Routes.Timesheet.getFullPath()} exact component={Timesheet} />

        <Redirect path={Routes.Project.getFullPath()} exact to={Routes.Board.getFullPath()} />
      </Switch>
    </Layout>
  );
}

export default ContentRouter;
