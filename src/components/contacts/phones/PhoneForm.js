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
    addPhone
} from '../../../actions/PhoneActions';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class PhoneForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            phoneType:'',
            phone:'',
        }
    }

    handleOnClose = () => {
        this.setState(
            {
                open:false
            }
        )
    } 

    handlePhoneTypeChange = (event) => {
        console.log(event.target.value);
        this.setState({phoneType: event.target.value});
    }

    handlePhoneChange = (event) => {
        console.log(event.target.value);
        this.setState({phone: event.target.value});
    }

    render(){
        const handleAdd = () => {
            console.log('add');
            const {dispatch} = this.props;
            const phoneType = 'home';
            const phone = this.state.phone;
            dispatch(addPhone(phoneType, phone));
        }

        const handleChange = (event) => {
            console.log(event.target.name);
            console.log(event.target.value);
            this.setState({
                phoneType: event.target.value,
            });
        }

        const {open} = this.props;

        return (
            <React.Fragment>
                <Dialog open={open} onClose={this.handleOnClose}>
                    <DialogTitle>Add Phone</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={12} sm={12}>
                                <FormControl required>
                                    <InputLabel htmlFor="phonetype-required">Type</InputLabel>
                                    <Select
                                        value={this.state.phoneType}
                                        onChange={handleChange}
                                        name="phoneType"
                                        inputProps={{
                                            id: 'phoneType-required',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'work'}>Work</MenuItem>
                                        <MenuItem value={'home'}>Home</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="phone"
                                    onChange={this.handlePhoneChange}
                                    name="phone"
                                    label="Phone"
                                    fullWidth
                                    autoComplete="phone"
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

PhoneForm.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.PhoneReducer.open,
});
  
export default connect(mapStateToProps)(PhoneForm);