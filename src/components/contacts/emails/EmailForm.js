import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
    addEmail,
    closeEmailForm
} from '../../../actions/EmailActions';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class EmailForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailType: props.emailType,
            email: props.email,
        }
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
            const emailType = this.state.emailType;
            const email = this.state.email;
            dispatch(addEmail(emailType, email));
        }

        const handleCancel = () => {
            const {dispatch} = this.props;
            dispatch(closeEmailForm());
        }

        const handleChange = (event) => {
            console.log(event.target.name);
            console.log(event.target.value);
            this.setState({
                emailType: event.target.value,
            });
        }

        const {open} = this.props;
        return (
            <React.Fragment>
                <Dialog open={open}>
                    <DialogTitle>Add Email</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                                <FormControl required>
                                    <InputLabel htmlFor="emailtype-required">Type</InputLabel>
                                    <Select
                                        value={this.state.emailType}
                                        onChange={handleChange}
                                        name="emailType"
                                        inputProps={{
                                            id: 'emailType-required',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'primary'}>Primary</MenuItem>
                                        <MenuItem value={'alternate'}>Alternate</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="email"
                                    onChange={this.handleEmailChange}
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    value={this.state.email}
                                    autoComplete="email"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleAdd} color="primary">
                            Save
                        </Button>
                        <Button onClick={handleCancel} color="primary">
                            Cancel
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