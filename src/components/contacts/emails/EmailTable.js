import React from 'react';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import EmailForm from './EmailForm';
import RowActions from '../../rowActions/RowActions';
import PropTypes from 'prop-types';
import {
    openEmailForm
} from '../../../actions/EmailActions';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    { title: 'Actions', field: 'actions', render: rowData=><RowActions rowData/>, sorting:false},
    { title: 'Type', field: 'emailType', type:'string'},
    { title: 'Email', field: 'email', type:'string'},
];

class EmailTable extends React.Component{
    render(){
        const { dispatch, data } = this.props;

        const handleAddClick = () => {
            dispatch(openEmailForm(this.props));
        }

        return(
            <React.Fragment>
                <Grid item xs={12} sm={12}>
                    <MaterialTable
                        title={"Emails"}
                        columns={columns}
                        data={data}
                        icons={tableIcons}
                        actions={[
                            {
                              icon: 'refresh',
                              tooltip: 'Refresh Data',
                              isFreeAction: true,
                              onClick: () => {alert('You should develop a code to export');},
                            },
                            {
                                icon: 'add',
                                tooltip: 'add',
                                isFreeAction: true,
                                onClick: () => {handleAddClick()},
                              }
                          ]}
                    />
                </Grid>
                
                <EmailForm />
            </React.Fragment>
        )
    }
}

EmailTable.propTypes = {
    open: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.array
};
  
const mapStateToProps = (state) => ({
    open: state.EmailReducer.open,
    data: state.EmailReducer.data,
});
  
export default connect(mapStateToProps)(EmailTable);