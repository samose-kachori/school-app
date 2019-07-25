import React from 'react';
import clsx from 'clsx';
import {fade, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MainListItems from './MainListItems';
import {secondaryListItems} from './SecondaryListItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Students from '../students/Students';
import Classes from '../classes/Classes';
import Teachers from '../teachers/Teachers';
import Library from '../library/Library';
import Cafeteria from '../cafeteria/Cafeteria';
import Transport from '../transport/Transport';
import Reports from '../reports/Reports';
import Dashboard from '../dashboard/Dashboard';
import MenuCore from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import SchoolTabs from '../students/CenteredTabs';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  drawerOpen,
  drawerClose,
} from '../../actions/DrawerActions';

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 0,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

function Content(classes) {
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
      <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
  );
}

class Menu extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      anchorEl:null,
      menuId: 'primary-search-account-menu',
    };
  }  

  handleProfileMenuOpen=(event)=> {
    this.setState({
      anchorEl:event.currentTarget
    });
  }

  handleMenuClose=()=> {
    this.setState({
      anchorEl:null
    });
  }
  
  renderTabs = (show) => {
    switch(show){
      case 'students':
        return (<SchoolTabs/>);
      default:
        return (<div></div>);
    }
  }

  renderMenu = (show) => {
    switch(show){
      case 'students':
          return (
            <MenuCore
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={this.state.menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>Enroll</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>Terminate</MenuItem>
        </MenuCore>
          );
      default:
        return (<div></div>);
    }
  }

  renderSwitch = (show) => {
    switch(show) {
      case 'dashboard':
        return (<Dashboard />);
      case 'students':
        return (<Students/>);
      case 'classes':
        return (<Classes/>);
      case 'teachers':
        return (<Teachers/>);
      case 'library':
        return (<Library/>);
      case 'cafeteria':
        return (<Cafeteria/>);
      case 'transport':
          return (<Transport/>);
      case 'reports':
        return (<Reports/>);
      default:
        return (<Content />);
    }
  }

render(){
  const { classes, show, drawerTitle, dispatch, open } = this.props;
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={()=>dispatch(drawerOpen())}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {drawerTitle}
          </Typography>
          {this.renderTabs(show)}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={this.state.menuId}
              aria-haspopup="true"
              onClick={this.handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {this.renderMenu(show)}
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={()=>dispatch(drawerClose())}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List><MainListItems/></List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {this.renderSwitch(show)}
        {/*<MadeWithLove />*/}
      </main>
    </div>
  );
}
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  show: PropTypes.string.isRequired,
  drawerTitle: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  open: state.DrawerReducer.open,
  show: state.DrawerReducer.show,
  drawerTitle: state.DrawerReducer.drawerTitle
});

export default connect(mapStateToProps)(withStyles(styles)(Menu));

