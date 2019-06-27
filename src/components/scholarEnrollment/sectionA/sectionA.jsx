import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class SectionA extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Record A" />
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={2}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="date"
                                                label="Date of Admission"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="date"
                                                label="Date of Removal"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Cause of Removal"
                                        multiline
                                        fullWidth
                                        rows="4"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                </Card>
            </div>
        );
    }
}

export default SectionA;