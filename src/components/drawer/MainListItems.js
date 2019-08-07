import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import DashboardIcon from '@material-ui/icons/TableChartRounded';
import ClassIcon from '@material-ui/icons/DashboardRounded';
import StudentIcon from '@material-ui/icons/GrainRounded';
import TeacherIcon from '@material-ui/icons/PeopleRounded';
import LibraryIcon from '@material-ui/icons/LocalLibraryRounded';
import TransportIcon from '@material-ui/icons/LocalShippingRounded';
import ReportIcon from '@material-ui/icons/BarChartRounded';
import CafeteriaIcon from '@material-ui/icons/RestaurantRounded';

import {
  selectStudents,
  selectDashboard,
  selectTeachers,
  selectCafeteria,
  selectLibrary,
  selectTransport,
  selectReports,
  selectClasses
} from '../../actions/DrawerActions';


class MainListItems extends React.Component {
  render(){
    return (
      <div>
        <ListItem button onClick={()=>this.props.selectDashboard()}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectStudents()}>
          <ListItemIcon>
            <StudentIcon />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectClasses()}>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Classes" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectTeachers()}>
          <ListItemIcon>
            <TeacherIcon />
          </ListItemIcon>
          <ListItemText primary="Teachers" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectLibrary()}>
          <ListItemIcon>
            <LibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectCafeteria()}>
          <ListItemIcon>
            <CafeteriaIcon />
          </ListItemIcon>
          <ListItemText primary="Cafeteria" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectTransport()}>
          <ListItemIcon>
            <TransportIcon />
          </ListItemIcon>
          <ListItemText primary="Transport" />
        </ListItem>
        <ListItem button onClick={()=>this.props.selectReports()}>
          <ListItemIcon>
            <ReportIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </div>
    );
  }
};

MainListItems.propTypes = {
  selectStudents: PropTypes.func.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectTeachers: PropTypes.func.isRequired,
  selectCafeteria: PropTypes.func.isRequired,
  selectLibrary: PropTypes.func.isRequired,
  selectTransport: PropTypes.func.isRequired,
  selectReports: PropTypes.func.isRequired,
  selectClasses: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  selectStudents,
  selectDashboard,
  selectTeachers,
  selectCafeteria,
  selectLibrary,
  selectTransport,
  selectReports,
  selectClasses
};  

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);


