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
    addAddress,
    closeAddressForm
} from '../../actions/AddressActions';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class AddressForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            addressType: props.addressType,
            addressLine1: props.addressLine1,
            addressLine2: props.addressLine2,
            city: props.city,
            state: props.state,
            country: props.country,
            zip: props.zip
        }
    }

    handleOnClose = () => {
        this.setState(
            {
                open:false
            }
        )
    } 

    handleAddressLine1Change = (event) => {
        console.log(event.target.value);
        this.setState({addressLine1: event.target.value});
    }

    handleAddressLine2Change = (event) => {
        this.setState({addressLine2: event.target.value});
    }

    handleCityChange = (event) => {
        this.setState({city: event.target.value});
    }

    handleStateChange = (event) => {
        this.setState({state: event.target.value});
    }

    handleCountryChange = (event) => {
        this.setState({country: event.target.value});
    }

    handleZipChange = (event) => {
        this.setState({zip: event.target.value});
    }

    

    render(){
        const {open} = this.props;

        const handleCancel = () => {
            const {dispatch} = this.props;
            dispatch(closeAddressForm());
        }
        
        const handleAdd = () => {
            console.log('add');
            const {dispatch} = this.props;
            const addressType = this.state.addressType;
            const addressLine1 = this.state.addressLine1;
            const addressLine2 = this.state.addressLine2;
            const city = this.state.city;
            const state = this.state.state;
            const country = this.state.country;
            const zip = this.state.zip;
            dispatch(addAddress(addressType, addressLine1, addressLine2, city, state, country, zip));
        }

        const handleChange = (event) => {
            console.log(event.target.name);
            console.log(event.target.value);
            this.setState({
                addressType: event.target.value,
            });
        }

        return (
            <React.Fragment>
                <Dialog open={open} onClose={this.handleOnClose}>
                    <DialogTitle>Add Address</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <FormControl required>
                                    <InputLabel htmlFor="addresstype-required">Type</InputLabel>
                                    <Select
                                        value={this.state.addressType}
                                        onChange={handleChange}
                                        name="addressType"
                                        inputProps={{
                                            id: 'addressType-required',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'permanent'}>Permanent</MenuItem>
                                        <MenuItem value={'mailing'}>Mailing</MenuItem>
                                    </Select>
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    onChange={this.handleAddressLine1Change}
                                    id="addressLine1"
                                    name="addressLine1"
                                    label="Address line 1"
                                    value={this.state.addressLine1}
                                    fullWidth
                                    autoComplete="billing address-line1"
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="addressLine2"
                                    onChange={this.handleAddressLine2Change}
                                    name="addressLine2"
                                    label="Address line 2"
                                    value={this.state.addressLine2}
                                    fullWidth
                                    autoComplete="billing address-line2"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    onChange={this.handleCityChange}
                                    name="city"
                                    label="City"
                                    value={this.state.city}
                                    fullWidth
                                    autoComplete="billing address-level2"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="state"
                                    onChange={this.handleStateChange}
                                    name="state"
                                    label="State/Province/Region"
                                    value={this.state.state}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    onChange={this.handleZipChange}
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    value={this.state.zip}
                                    autoComplete="billing postal-code"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    onChange={this.handleCountryChange}
                                    name="country"
                                    label="Country"
                                    value={this.state.country}
                                    fullWidth
                                    autoComplete="billing country"
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

AddressForm.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.AddressReducer.open,
});
  
export default connect(mapStateToProps)(AddressForm);