import React, { Component } from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';
import TableChart from '@material-ui/icons/TableChart';
import ListAlt from '@material-ui/icons/ListAlt';
import AccessTime from '@material-ui/icons/AccessTime';
import Dashboard from '@material-ui/icons/Dashboard';
import AccountTree from '@material-ui/icons/AccountTree';
import Assessment from '@material-ui/icons/Assessment';

import * as Routes from '../../router/Routes';

export class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Navigation content={this.props.children}>
          <div link={Routes.Board.getUrl()} icon={<TableChart />}>
            Tablica
          </div>
          <div link={Routes.Backlog.getUrl()} icon={<ListAlt />}>
            Backlog
          </div>
          <div link={Routes.Timesheet.getUrl()} icon={<AccessTime />}>
            Czas pracy
          </div>
          <div link={Routes.Structure.getUrl()} icon={<AccountTree />}>
            Struktura
          </div>
          <div link={Routes.Raports.getUrl()} icon={<Assessment />}>
            Raporty
          </div>
          <div link={Routes.Dashboard.getUrl()} icon={<Dashboard />}>
            Dashboard
          </div>
        </Navigation>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
