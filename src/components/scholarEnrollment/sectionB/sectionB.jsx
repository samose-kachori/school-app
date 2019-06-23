import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class SectionB extends React.Component {
    render() {
        return (
            <div>
               <Card>
                   <CardHeader
                       title={"Record B"}
                   />
                   <CardContent>
                       <Grid container spacing={1}>
                           <Grid item xs={2}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="name"
                                            label="Name of Student"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="dateOfBirth"
                                            label="Date of Birth"
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
                                            id="aadhaarNumber"
                                            label="Aadhaar Number"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="name"
                                            label="Address"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            rows={2}
                                            multiline
                                            fullWidth
                                        />
                                    </Grid>

                                </Grid>
                           </Grid>
                           <Grid item xs={2}>
                               <Grid container spacing={1}>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="religion"
                                           label="Religion"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="caste"
                                           label="Caste"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="category"
                                           label="Category"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                               </Grid>
                           </Grid>
                           <Grid item xs={2}>
                               <Grid container spacing={1}>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="lastSchoolAttended"
                                           label="Last School Attended"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="lastClassAttended"
                                           label="Last Class Attended"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                               </Grid>
                           </Grid>
                           <Grid item xs={2}>
                               <Grid container spacing={1}>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="fathersName"
                                           label="Father's Name"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="fathersOccupation"
                                           label="Father's Ocuupation"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="aadhaarNumber"
                                           label="Aadhaar Number"
                                           type="number"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="name"
                                           label="Address"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           rows={2}
                                           multiline
                                           fullWidth
                                       />
                                   </Grid>
                               </Grid>
                           </Grid>
                           <Grid item xs={2}>
                               <Grid container spacing={1}>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="mothersName"
                                           label="Mother's Name"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="mothersOccupation"
                                           label="Mother's Ocuupation"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="aadhaarNumber"
                                           label="Aadhaar Number"
                                           type="number"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="mothersAddress"
                                           label="Address"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           rows={2}
                                           multiline
                                           fullWidth
                                       />
                                   </Grid>
                               </Grid>
                           </Grid>
                           <Grid item xs={2}>
                               <Grid container spacing={1}>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="guardiansName"
                                           label="Guardian's Name"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="guardiansOccupation"
                                           label="Guardian's Ocuupation"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="aadhaarNumber"
                                           label="Aadhaar Number"
                                           type="number"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           fullWidth
                                       />
                                   </Grid>
                                   <Grid item xs={12}>
                                       <TextField
                                           id="guardiansAddress"
                                           label="Address"
                                           InputLabelProps={{
                                               shrink: true,
                                           }}
                                           rows={2}
                                           multiline
                                           fullWidth
                                       />
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>
                   </CardContent>
               </Card>
            </div>
        );
    };
}

export default SectionB;