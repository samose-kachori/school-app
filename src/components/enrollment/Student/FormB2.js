import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function FormB2() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Mother's Details
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
          <TextField
            required
            id="mothersFirstName"
            name="mothersFirstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="motherssMiddleName"
            name="motherssMiddleName"
            label="Middle name"
            fullWidth
            autoComplete="mname"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="mothersLastName"
            name="mothersLastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mothersAadhaarNumber"
            name="mothersAadhaarNumber"
            label="Aadhaar Number"
            fullWidth
            autoComplete="aadhaar"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mothersDateOfBirth"
            name="mothersDateOfBirth"
            label="Date of Birth"
            fullWidth
            autoComplete="dob"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="mothersPhoneNumber"
            name="mothersPhoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="mothersEmail"
            name="mothersEmail"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mothersOccupation"
            name="mothersOccupation"
            label="Occupation"
            fullWidth
            autoComplete="occupation"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mothersHighestDegreeEarned"
            name="mothersHighestDegreeEarned"
            label="Highest Degree Earned"
            fullWidth
            autoComplete="highestDegreeEarned"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Same as Student's Address"
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
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Emergency Contact"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}