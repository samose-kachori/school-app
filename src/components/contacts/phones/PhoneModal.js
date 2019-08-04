import React from 'react';
import Modal from '@material-ui/core/Modal';
import PhoneForm from './PhoneForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PhoneModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
        }
    }

    handleOnClose = () => {
        this.setState(
            {
                open:false
            }
        )
    } 

    render(){
        const {open} = this.props;
        return (
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={this.handleOnClose}
                >
                    <PhoneForm />
                </Modal>
            </React.Fragment>
        )
    }
}

PhoneModal.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.PhoneReducer.open,
});
  
export default connect(mapStateToProps)(PhoneModal);