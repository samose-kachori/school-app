import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormA from './FormA';
import FormB1 from './FormB1';
import FormB2 from './FormB2';
import FormB3 from './FormB3';
import FormB4 from './FormB4';
import FormC from './FormC';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(900 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  paperBottom: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    padding: theme.spacing(1),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  stepperBottom: {
    padding: theme.spacing(2, 0, 2),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  buttonBottom: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Student', 'Father','Mother','Guardian','Prev. School' ,'Summary'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormA />;
    case 1:
      return <FormB1 />;
    case 2:
      return <FormB2 />;
    case 3:
      return <FormB3 />;
    case 4:
      return <FormB4 />;
    case 5:
      return <FormC />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Student Enrollment
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Enroll' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <AppBar position="sticky" color="default" className={classes.appBar}>
        <Paper className={classes.paperBottom}>
        <Grid container spacing={2}>
          <Grid item xs={10} sm={10}>
          <Stepper activeStep={activeStep} className={classes.stepperBottom}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          </Grid>
          <Grid item xs={2} sm={2}>
            <React.Fragment>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.buttonBottom}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.buttonBottom}
                  >
                    {activeStep === steps.length - 1 ? 'Enroll' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
          </Grid>
          </Grid>
        </Paper>
      </AppBar>
    </React.Fragment>
  );
}