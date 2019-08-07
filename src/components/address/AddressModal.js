import React from 'react';
import Modal from '@material-ui/core/Modal';
import AddressForm from './AddressForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AddressModal extends React.Component{
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
                    <AddressForm />
                </Modal>
            </React.Fragment>
        )
    }
}

AddressModal.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.AddressReducer.open,
});
  
export default connect(mapStateToProps)(AddressModal);