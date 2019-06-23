import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class SectionD extends React.Component {
    render() {
        return (
          <div>
              <Card>
                  <CardHeader
                        title ="Record D" />
                  <CardContent>
                      <Grid container spacing={1}>
                          <Grid item xs={2}>
                              <TextField
                                  id="fromYear"
                                  label="From Year"
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  type={"number"}
                                  fullWidth
                              />
                          </Grid>
                          <Grid item xs={2}>
                              <TextField
                                  id="toYear"
                                  label="To Year"
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  type={"number"}
                                  fullWidth
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                id="conductAndWorkDuringSchoolYear"
                                label="Conduct and work during school year"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                multiline
                                rows={4}
                                fullWidth
                              />
                          </Grid>
                      </Grid>
                  </CardContent>
              </Card>
          </div>
        );
    }
}

export default SectionD;