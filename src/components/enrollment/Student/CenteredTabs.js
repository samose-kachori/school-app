import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Main" />
        <Tab label="Enroll" />
      </Tabs>
      </React.Fragment>
  );
}