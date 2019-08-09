import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import {
  selectAction
} from '../../actions/StudentsActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';


export class SimpleExpansionPanel extends React.Component {
  
  render(){
    const { selectedAction } = this.props;
    const handleListItemClick = (event, action) => {
      selectAction(action, this.props);
    }

    return (
      <React.Fragment>
        <AppBar position="sticky" color="default">
        <ExpansionPanel postion="sticky">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {selectedAction}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item xs={12} sm={2}>
              <List>
                  <ListItem button
                      selected={selectedAction === "dashboard"}
                      onClick={event => handleListItemClick(event, "dashboard")}>
                    <ListItemText primary="Dashboard"/>
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "profile"}
                      onClick={event => handleListItemClick(event, "profile")}>
                    <ListItemText primary="Profile" />
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "addresses"}
                      onClick={event => handleListItemClick(event, "addresses")}>
                    <ListItemText primary="Addresses"/>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={2}>
              <List>
                  <ListItem button
                      selected={selectedAction === "contacts"}
                      onClick={event => handleListItemClick(event, "contacts")}>
                    <ListItemText primary="Contacts"/>
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "gradesAndTranscripts"}
                      onClick={event => handleListItemClick(event, "gradesAndTranscripts")}>
                    <ListItemText primary="Grades and Transcripts" />
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "courses"}
                      onClick={event => handleListItemClick(event, "courses")}>
                    <ListItemText primary="Courses"/>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={2}>
              <List>
                  <ListItem button
                      selected={selectedAction === "myAnnouncements"}
                      onClick={event => handleListItemClick(event, "myAnnouncements")}>
                    <ListItemText primary="My Announcements"/>
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "myPreferences"}
                      onClick={event => handleListItemClick(event, "myPreferences")}>
                    <ListItemText primary="My Preferences" />
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "myHouse"}
                      onClick={event => handleListItemClick(event, "myHouse")}>
                    <ListItemText primary="My House"/>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={2}>
              <List>
                  <ListItem button
                      selected={selectedAction === "requestLeaveOfAbsence"}
                      onClick={event => handleListItemClick(event, "requestLeaveOfAbsence")}>
                    <ListItemText primary="Request Leave of Absence"/>
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "requestTransfer"}
                      onClick={event => handleListItemClick(event, "requestTransfer")}>
                    <ListItemText primary="Request Transfer" />
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "requestTermination"}
                      onClick={event => handleListItemClick(event, "requestTermination")}>
                    <ListItemText primary="Request Termination"/>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={2}>
              <List>
                  <ListItem button
                      selected={selectedAction === "syllabus"}
                      onClick={event => handleListItemClick(event, "syllabus")}>
                    <ListItemText primary="My Syllabus"/>
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "suspend"}
                      onClick={event => handleListItemClick(event, "suspend")}>
                    <ListItemText primary="Suspend" />
                  </ListItem>
                  <ListItem button
                      selected={selectedAction === "terminate"}
                      onClick={event => handleListItemClick(event, "terminate")}>
                    <ListItemText primary="Terminate"/>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={2}>
                <List>
                  <ListItem button
                      selected={selectedAction === "enroll"}
                      onClick={event => handleListItemClick(event, "enroll")}>
                    <ListItemText primary="Enroll"/>
                  </ListItem>
                 </List>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </AppBar>
      </React.Fragment>
    );
  }
}

SimpleExpansionPanel.propTypes = {
  selectedAction: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  selectedAction: state.StudentsReducer.selectedAction,
});

// const mapDispatchToProps = dispatch => bindActionCreators(
//   {
//     selectAction
//   },
//   dispatch,
// )

export default connect(mapStateToProps)(SimpleExpansionPanel);