import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
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
import Refresh from '@material-ui/icons/Refresh';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import RowActions from '../rowActions/RowActions';
import PropTypes from 'prop-types';
import {withStyles } from '@material-ui/core/styles';

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
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Refresh: forwardRef((props, ref) => <Refresh {...props} ref={ref} />)
};

const styles = (theme) => ({
    layout: {
        width: 'auto',
        height: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      },
});
/*
"string","boolean","numeric","date","datetime","time","currency"
*/
const columns = [
        { title: 'Actions', field: 'actions', render: rowData=><RowActions rowData/>, sorting:false},
        { title: 'Student Id', field: 'studentId', type: 'string'},
        { title: 'Name', field: 'name', type:'string'},
        { title: 'Class', field: 'class', type:'string', defaultGroupOrder: 0 },
        { title: 'House', field: 'house', type:'string' },
        { title: 'Date of Admission', field: 'dateOfAdmission', type:'date' },
    ];

const data =  [
    {
        studentId: '6',
        name: 'John Doe',
        class: 'VI A',
        house: 'Green',
        dateOfAdmission:'2011-06-01'
    },
    {
        studentId: '7',
        name: 'Rachel Greene',
        class: 'VII B',
        house: 'Blue',
        dateOfAdmission:'2012-06-01'
    },
    {
        studentId: '8',
        name: 'Joey',
        class: 'VI A',
        house: 'Blue',
        dateOfAdmission:'2013-06-01'
    },
];


class Main extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            columns,
            data
        }
    };

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardHeader title=""/>
                    <CardContent>
                        <MaterialTable
                        title={""}
                        columns={this.state.columns}
                        data={this.state.data}
                        icons={tableIcons}
                        options={{
                            grouping: true, 
                            searchFieldAlignment:'left',    
                            exportButton: true,
                            exportCsv: (columns, data) => {
                                  alert('You should develop a code to export ' + data.length + ' rows');
                            }
                        }}
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
                                onClick: () => {alert('You should develop a code to export');},
                              }
                          ]}
                    />
               
                    </CardContent>
                </Card>
               </React.Fragment>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(Main);