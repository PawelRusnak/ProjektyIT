import React, { Component } from 'react';
import Navigation from './Navigation';
import PropTypes from 'prop-types';
import Warning from '@material-ui/icons/Warning';

import * as Routes from '../../router/Routes';

export class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <Navigation content={this.props.children}>
          <div link={Routes.Board.getUrl()} icon={<Warning />}>
            board
          </div>
          <div link={Routes.Backlog.getUrl()} icon={<Warning />}>
            backlog
          </div>
          <div link={Routes.Dashboard.getUrl()} icon={<Warning />}>
            dashboard
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
