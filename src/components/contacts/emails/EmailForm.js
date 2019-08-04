import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    addEmail
} from '../../../actions/EmailActions';

class EmailForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            emailType:'',
            email:'',
        }
    }

    handleOnClose = () => {
        this.setState(
            {
                open:false
            }
        )
    } 

    handleEmailTypeChange = (event) => {
        console.log(event.target.value);
        this.setState({emailType: event.target.value});
    }

    handleEmailChange = (event) => {
        console.log(event.target.value);
        this.setState({email: event.target.value});
    }

    render(){
        const handleAdd = () => {
            console.log('add');
            const {dispatch} = this.props;
            const emailType = 'primary';
            const email = this.state.email;
            dispatch(addEmail(emailType, email));
        }

        const {open} = this.props;
        return (
            <React.Fragment>
                <Dialog open={open} onClose={this.handleOnClose}>
                    <DialogTitle>Add Email</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    onChange={this.handleEmailTypeChange}
                                    id="emailType"
                                    name="emailType"
                                    label="Type"
                                    fullWidth
                                    autoComplete="email type"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="email"
                                    onChange={this.handleEmailChange}
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAdd} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

EmailForm.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.EmailReducer.open,
});
  
export default connect(mapStateToProps)(EmailForm);