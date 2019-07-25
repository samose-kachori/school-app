import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
      { title: 'Class', field: 'class', type:'numeric'},
      { title: 'From Month/Year', field: 'fromMonthYear', type:'text' },
      { title: 'To Month/Year', field: 'toMonthYear', type:'text' },
      { title: 'Marks Obtained(%)', field: 'marksObtained', type:'numeric' },
      { title: 'Subjects taken', field: 'subjectsTaken', type:'array' },
  ];

const rowData =  [
  {
      class: 6,
      fromMonthYear: 'June 2016',
      toMonthYear: 'June 2017',
      marksObtained: 69.90,
      subjectsTaken: ['english', 'hindi'],
  },
  {
    class: 6,
    fromMonthYear: 'June 2017',
    toMonthYear: 'June 2018',
    marksObtained: 79.90,
    subjectsTaken: ['english', 'hindi'],
  },
];

class FormB4 extends React.Component {
  constructor(props){
    super(props);
    this.setState({
      columns,
      rowData
    });
  }
  render(){
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Previous School's Details
        </Typography>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <TextField
              required
              id="previousSchoolAttended"
              name="previousSchoolAttended"
              label="Previous School Attended"
              fullWidth
              autoComplete="fname"
              helperText="Last School Attended, if any which the scholar attended joining this school"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12}>
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
              fullWidth />
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
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="previousClassAttended"
              name="previousClassAttended"
              label="Previous Class Attended"
              fullWidth
              autoComplete="fname"
              helperText="The highest class from which the student was promoted or was fit for promotion on leaving his/her last school"
            />
          </Grid>
          <Grid item xs={12}>
          <MaterialTable
            title={"Classes Attended"}
            columns={columns}
            data={rowData}
            icons={tableIcons}
            editable={{
              onRowAdd: newData =>
                  new Promise(resolve => {
                      setTimeout(() => {
                          resolve();
                          const data = [...this.state.data];
                          data.push(newData);
                          this.setState({...this.state, data});
                      }, 600);
                  }),
              onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                      setTimeout(() => {
                          resolve();
                          const data = [...this.state.data];
                          data[data.indexOf(oldData)] = newData;
                          this.setState({...this.state, data});
                      }, 600);
                  }),
              onRowDelete: oldData =>
                  new Promise(resolve => {
                      setTimeout(() => {
                          resolve();
                          const data = [...this.state.data];
                          data.splice(data.indexOf(oldData), 1);
                          this.setState({...this.state, data});
                      }, 600);
                  }),
                }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default FormB4;