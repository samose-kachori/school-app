import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ActionIcon from '@material-ui/icons/SettingsRounded';
import {
    editAddress
} from '../../actions/AddressActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AddressRowActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

    handleClick = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        });
    }

    handleClose = () => {
        const { dispatch, rowData } = this.props;
        console.log(rowData);
        dispatch(editAddress(rowData.addressType,
            rowData.addressLine1,
            rowData.addressLine2,
            rowData.city,
            rowData.state,
            rowData.zip, 
            rowData.country));
        this.setState({
            anchorEl: null
        });
    }

    render(){
        return (
            <div>
              <ActionIcon onClick={this.handleClick}/>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Edit</MenuItem>
                <MenuItem onClick={this.handleClose}>Delete</MenuItem>
              </Menu>
            </div>
          );
    }
}

AddressRowActions.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
};
  
const mapStateToProps = (state) => ({
    open: state.AddressReducer.open,
});
  
export default connect(mapStateToProps)(AddressRowActions);
