import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {
    addPhone
} from '../../../actions/PhoneActions';
import {connect} from 'react-redux';

class PhoneForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phoneType:'',
            phone:'',
        }
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
                            onChange={this.handlePhoneTypeChange}
                            id="phoneType"
                            name="phoneType"
                            label="Type"
                            fullWidth
                            autoComplete="phone type"
                        />
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

PhoneForm.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.PhoneReducer.open,
});
  
export default connect(mapStateToProps)(PhoneForm);