import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { styled } from '@material-ui/core/styles';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 255;
const ToolbarStyled = styled(Toolbar)({
  justifyContent: 'space-between',
});
const ToolbarLeft = styled('div')({
  display: 'flex',
  alignItems: 'center',
});


const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: -20,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 'px !important',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(1)
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  margin: {
    marginRight: 10
  },
  hiddenPosition: {
    display: 'none'
  }
});

const NavBar = ({ open, hover, handleDrawerOpen, withSideBar, classes }) => {

  return (
    <AppBar
      position='fixed'
      className={classNames(classes.appBar, {
        [classes.appBarShift]: open || hover,
      })}
    >
      <ToolbarStyled>
        <ToolbarLeft>
          {withSideBar && <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: open || hover,
            })}
          >
            <MenuIcon />
          </IconButton>}
          <Typography style={{ textTransform: 'capitalize' }} variant='h6' color='inherit'>
            {withSideBar ? window.location.pathname.split('/')[1].replace('-', ' ') : 'Dashboard'}
          </Typography>
        </ToolbarLeft>
      </ToolbarStyled>
    </AppBar >
  )
}

export default withStyles(styles, { withTheme: true })(NavBar);