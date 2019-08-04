import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {
    addEmail
} from '../../../actions/EmailActions';
import {connect} from 'react-redux';

class EmailForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailType:'',
            email:'',
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
            const emailType = 'primary';
            const email = this.state.email;
            dispatch(addEmail(emailType, email));
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

EmailForm.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};
  
const mapStateToProps = (state) => ({
    open: state.EmailReducer.open,
});
  
export default connect(mapStateToProps)(EmailForm);