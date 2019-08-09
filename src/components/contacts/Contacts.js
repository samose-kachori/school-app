import React from 'react'
import Phones from './phones/PhoneTable';
import Emails from './emails/EmailTable';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Contacts extends React.Component 
{
    render(){
        return (
            <React.Fragment>
                <Card>
                    <CardContent>
                        <Phones />
                    </CardContent>
                    <CardContent>
                        <Emails />
                    </CardContent>
                </Card>
            </React.Fragment>
        )
    }
}

export default Contacts;