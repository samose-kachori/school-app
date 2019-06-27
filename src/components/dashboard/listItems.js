import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ClassIcon from '@material-ui/icons/DashboardRounded';
import TeacherIcon from '@material-ui/icons/PeopleRounded';
import StudentIcon from '@material-ui/icons/GrainRounded';
import LibraryIcon from '@material-ui/icons/LocalLibraryRounded';
import TransportIcon from '@material-ui/icons/LocalShippingRounded';
import ReportIcon from '@material-ui/icons/BarChartRounded';
import RestaurantIcon from '@material-ui/icons/RestaurantRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <StudentIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ClassIcon />
      </ListItemIcon>
      <ListItemText primary="Classes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TeacherIcon />
      </ListItemIcon>
      <ListItemText primary="Teachers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Library" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="Canteen" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TeacherIcon />
      </ListItemIcon>
      <ListItemText primary="Teachers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TransportIcon />
      </ListItemIcon>
      <ListItemText primary="Transport" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Assignments</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);