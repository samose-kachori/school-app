import React from 'react';
import StudentEnrollment from '../enrollment/Student/StudentEnrollment';
import Main from './Main';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import Addresses from '../address';
class Students extends React.Component{
    renderTab = (selectedAction) => {
        switch(selectedAction)
        {
            case 'main':
                return (<Main/>);
            case 'enroll':
                return (<StudentEnrollment/>);
            case 'addresses':
                return (<Addresses/>);
            default:
                return (<Main/>);
        }
    }

    render(){
        const { selectedAction } = this.props; 
        return (
            <div>
                <div>
                    <SimpleExpansionPanel/>
                </div>
                <div>
                    {this.renderTab(selectedAction)}
                </div>
            </div>
        );
    }
}

Students.propTypes = {
    selectedAction: PropTypes.string.isRequired,
};
  
const mapStateToProps = (state) => ({
    selectedAction: state.StudentsReducer.selectedAction,
});
  
export default connect(mapStateToProps)(Students);