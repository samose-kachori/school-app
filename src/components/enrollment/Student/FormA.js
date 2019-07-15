import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Dropzone from "react-dropzone";

export default class FormA extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      uploadFile : ''
    };
  }

  onImageDrop (files) {
    /* files would always be an array as per react */
    //console.log('logging the file name before setting to state ' + files[0].name);
    this.setState({
      uploadFile : files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload (fileToUpload) {
    // TODO actually handle the image upload
    // process here
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Student Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {this.state.uploadFile === '' ? (
                      <Typography>
                        Drag 'n' drop image file here, or click to select
                        file
                      </Typography>
                    ) : (
                      <div>
                        <Typography>{this.state.uploadFile.name}</Typography>
                        <img src={this.state.uploadFile} />
                      </div>
                    )}
                  </div>
                </section>
              )}
            </Dropzone>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="middleName"
              name="middleName"
              label="Middle name"
              fullWidth
              autoComplete="mname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="aadhaarNumber"
              name="aadhaarNumber"
              label="Aadhaar Number"
              fullWidth
              autoComplete="aadhaar"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="dateOfBirth"
              name="dateOfBirth"
              label="Date of Birth"
              fullWidth
              autoComplete="dob"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="gender"
              name="gender"
              label="Gender"
              fullWidth
              autoComplete="gender"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="phone"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            /** we should instead try and have a drop down for class here */
            <TextField
              id="class"
              name="class"
              label="Enrollment class/ course"
              fullWidth
              autoComplete="class"
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
              fullWidth
            />
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
          <Grid item xs={12} sm={4}>
            <TextField
              id="religion"
              name="religion"
              label="Religion"
              fullWidth
              autoComplete="religion"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="caste"
              name="caste"
              label="Caste"
              fullWidth
              autoComplete="caste"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="category"
              name="category"
              label="Category"
              fullWidth
              autoComplete="category"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveAddress"
                  value="yes"
                />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
