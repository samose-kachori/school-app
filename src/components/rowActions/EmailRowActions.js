import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ActionIcon from '@material-ui/icons/SettingsRounded';
import {
  editEmail
} from '../../actions/EmailActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class EmailRowActions extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    });
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
    const { dispatch, rowData } = this.props;
    dispatch(editEmail( rowData.emailType,rowData.email));
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

EmailRowActions.propTypes = {
  open: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  open: state.EmailReducer.open,
});

export default connect(mapStateToProps)(EmailRowActions);