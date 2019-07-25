import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  selectTab
} from '../../actions/StudentsActions';

class CenteredTabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    };
  }

  render(){
    const { dispatch, value} = this.props;
    
    const handleChange = (event, newValue) => {
      dispatch(selectTab(newValue, this.props));
    }

    return (
      <React.Fragment>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Main" />
          <Tab label="Enroll" />
        </Tabs>
        </React.Fragment>
    );
  }
}

CenteredTabs.propTypes = {
  value: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  value: state.StudentsReducer.selectedTabId,
});

export default connect(mapStateToProps)(CenteredTabs);