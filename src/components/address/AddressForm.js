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
    render(){
        const {dispatch} = this.props;
        const handleAdd = () => {
            console.log('add');
            dispatch(addAddress(null, null, null, null, null, null, null));
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
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
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