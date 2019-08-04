import React from 'react'
import Phones from './phones/PhoneTable';
import Emails from './emails/EmailTable';
import Grid from '@material-ui/core/Grid';

class Contacts extends React.Component 
{
    render(){
        return (
            <React.Fragment>
                <Grid container>
                    <Phones />
                    <Emails />
                </Grid>
            </React.Fragment>
        )
    }
}

export default Contacts;