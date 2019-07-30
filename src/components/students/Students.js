import React from 'react';
import StudentEnrollment from '../enrollment/Student/StudentEnrollment';
import Main from './Main';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SimpleExpansionPanel from './SimpleExpansionPanel';

class Students extends React.Component{
    renderTab = (selectedTabName) => {
        switch(selectedTabName)
        {
            case 'Main':
                return (<Main/>);
            case 'Enroll':
                return (<StudentEnrollment/>);
            default:
                return (<Main/>);
        }
    }

    render(){
        const { selectedTabName } = this.props; 
        return (
            <div>
                <div>
                    <SimpleExpansionPanel/>
                </div>
                <div>
                    {this.renderTab(selectedTabName)}
                </div>
            </div>
        );
    }
}

Students.propTypes = {
    selectedTabName: PropTypes.string.isRequired,
};
  
const mapStateToProps = (state) => ({
    selectedTabName: state.StudentsReducer.selectedTabName,
});
  
export default connect(mapStateToProps)(Students);