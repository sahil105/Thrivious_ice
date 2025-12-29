import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '2rem',
  },
  heading: {
    marginBottom: '2rem',
  },
  contactDetails: {
    marginBottom: '2rem',
  },
  address: {
    marginBottom: '1rem',
  },
});

const Example = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h4">
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <div className={classes.contactDetails}>
            <Typography variant="h4" gutterBottom>
              Contact Details
            </Typography>
            <Typography variant="h5" gutterBottom>
            <b> Office ADD </b>
            <Typography />
            <Typography sx={{fontSize:"15px"}} gutterBottom>

            Plot no : 58-59  vibarent-2 industrial estate, zank gidc, dehgam road,       
            </Typography>
                 </Typography>
            <Typography sx={{fontSize:"15px"}} gutterBottom>
            Ahmedabad-382330.            
                
            </Typography>
         <br/>
         <br/>
            <Typography variant="h6" gutterBottom>
            <b> Phone :</b>
            
                +91 9173251388
            </Typography>
            <br/>
         <br/>
            <Typography variant="h6" gutterBottom>
              {/* Fax: +1 (555) 123-4567 */}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <Typography variant="h4" gutterBottom>
              Branches
            </Typography>
            <div className={classes.address}>
              <Typography variant="h5" gutterBottom>
              Workshop ADD
               </Typography>
              <Typography sx={{fontSize:"15px"}} gutterBottom>
              Plot no : 58-59  vibarent-2 industrial estate, zank gidc, dehgam road,            </Typography>
              <Typography sx={{fontSize:"15px"}} gutterBottom>
              Ahmedabad-382330.
              </Typography>
            </div>
            <div className={classes.address}>
              <Typography variant="h5" gutterBottom>
              PUNE 
              </Typography>
              <Typography sx={{fontSize:"15px"}} gutterBottom>
              FL-65/346/1A, TATASHRI BHSAI,
     GAJANAM PUNE,
              </Typography>
              <Typography sx={{fontSize:"15px"}} gutterBottom>
              MAHARASHTRA-411041.
              </Typography>
            </div>
            <div className={classes.address}>
              <Typography variant="h5" gutterBottom>
              KERALA
              </Typography>
              <Typography sx={{fontSize:"15px"}} gutterBottom>
              VENNIYOOR, NEAR MSP KOZHICHENA,
      MALAPPURAM,               </Typography>
              <Typography sx={{fontSize:"15px"}} gutterBottom>
              KERALA- PO-676508              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Example;
