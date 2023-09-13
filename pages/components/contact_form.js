import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from '@mui/material';

const ContactForm = () => {

  return (
    <Container component="main" maxWidth="xs" sx={{padding: 4}}>
      {/* <Typography variant="subtitle" textAlign="center">
        Interested on my services and want to reach out then here is your chance
      </Typography> */}
      <form >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email Address"
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{marginTop:2}}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
