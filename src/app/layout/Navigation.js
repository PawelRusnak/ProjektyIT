import React from 'react';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'

const drawerWidth = 255;

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


export class Navigation extends React.Component {
  state = {
    open: false,
    hover: false,
    user: null
  }

  handleDrawerOpen = () => {
    this.setState(prevState => ({ ...prevState, open: true }));
  };

  handleDrawerClose = () => {
    this.setState(prevState => ({ ...prevState, open: false, hover: false }));
  };

  handleDrawerOpenTemp = () => {
    this.setState(prevState => ({ ...prevState, hover: true }));
  };

  handleDrawerCloseTemp = () => {
    this.setState(prevState => ({ ...prevState, hover: false }));
  };

  clickTab = tab => {
    this.setState(prevState => ({ ...prevState, tab: tab }));
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <NavBar open={this.state.open} hover={this.state.hover} handleDraweOpen={this.handleDrawerOpen} withSideBar={true} />
        <div
          onMouseEnter={this.handleDrawerOpenTemp}
          onMouseLeave={this.handleDrawerCloseTemp}
        >
          <Drawer
            variant='permanent'
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open || this.state.hover,
              [classes.drawerClose]: !(this.state.open || this.state.hover),
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open || this.state.hover,
                [classes.drawerClose]: !(this.state.open || this.state.hover),
              }),
            }}
            open={this.state.open || this.state.hover}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? (
                  <ChevronRightIcon />
                ) : (
                    <ChevronLeftIcon />
                  )}
              </IconButton>
            </div>

            <Divider />

            <List>
              {this.props.children.map((child) => {
                return (
                  <Link
                    to={child.props.link}
                    key={child.props.label}
                  >
                    <ListItem button>
                      <ListItemIcon>
                        {child.props.icon}
                      </ListItemIcon>
                      <ListItemText insetprimary={child.props.label}>
                        {child.props.children}
                      </ListItemText>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Drawer>
        </div>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.content}
        </main>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object,
  content: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
  ]),
  theme: PropTypes.object,
};


export default withStyles(styles, { withTheme: true })(Navigation);
