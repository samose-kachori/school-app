import React from 'react';
import Modal from '@material-ui/core/Modal';
import EmailForm from './EmailForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class EmailModal extends React.Component{
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
                    <EmailForm />
                </Modal>
            </React.Fragment>
        )
    }
}

EmailModal.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.EmailReducer.open,
});
  
export default connect(mapStateToProps)(EmailModal);