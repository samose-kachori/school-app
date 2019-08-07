import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {
    addAddress
} from '../../actions/AddressActions';
import {connect} from 'react-redux';

class AddressForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addressType:'',
            addressLine1:'',
            addressLine2:'',
            city:'',
            state:'',
            country:'',
            zip:''
        }
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
        const handleAdd = () => {
            console.log('add');
            const {dispatch} = this.props;
            const addressType = 'home';
            const addressLine1 = this.state.addressLine1;
            const addressLine2 = this.state.addressLine2;
            const city = this.state.city;
            const state = this.state.state;
            const country = this.state.country;
            const zip = this.state.zip;
            dispatch(addAddress(addressType, addressLine1, addressLine2, city, state, country, zip));
        }
    
        const handleCancel = () => {
            console.log('cancel');
        }

        return (
                <div style={{ backgroundColor: "white",
                    width: "600px",
                    height: "300px",
                    paddingLeft: "30px",
                    paddingRight: "30px",
                    paddingTop: "30px",
                    paddingBottom: "30px"}}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            onChange={this.handleAddressLine1Change}
                            id="addressLine1"
                            name="addressLine1"
                            label="Address line 1"
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
                            fullWidth
                            autoComplete="billing country"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAdd}
                        >
                        {'Add'}
                    </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCancel}
                        >
                        {'Cancel'}
                        </Button>
                    </Grid>
                </Grid>
            </div>
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