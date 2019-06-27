import React, { Component } from 'react';
import '../../App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-bootstrap.css';

class AgGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
            headerName: "Make", 
            field: "make", 
            sortable: true, 
            filter:true,
            checkboxSelection:true
        }, 
        {
            headerName: "Model", 
            field: "model", 
            children: [
                {headerName: 'a', field: 'a'},
                {headerName: 'b', field: 'b'},
            ]
        }, 
        {
            headerName: "Price", 
            field: "price", 
            sortable: true, 
            filter:true
        }],
        rowData: [{
            make: "Toyota", price: 35000, a:1, b:1
          }, {
            make: "Ford", price: 32000, a:2, b:2
          }, {
            make: "Porsche", price: 72000, a:3, b:3
          }]
    }
  }

  render() {
    return (
      <div 
        className="ag-theme-bootstrap"
        style={{ 
        height: '500px', 
        width: '600px' }} 
      >
        <button onCLick={this.onButtonClick}>Get selected rows</button>
        <AgGridReact
            onGridReady={ params => this.gridApi = params.api }
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection="multiple"
          >
        </AgGridReact>
      </div>
    );
  }
}

export default AgGrid;