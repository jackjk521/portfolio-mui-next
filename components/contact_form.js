import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Retrieve form data
    const formData = new FormData(e.target);
    const user_name = formData.get('name');
    const user_email = formData.get('email');
    const message = formData.get('message');

    const contactData = {
      user_name,
      user_email,
      message,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        // Contact successfully submitted
        // Do something with the response if needed
        console.log('success');
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  // Stylles
  const StyledContainer = styled(Container)`
    & input:-webkit-autofill {
      box-shadow: 0 0 0 100px white inset !important;
      -webkit-text-fill-color: black !important;
    }
  `;

  const boxStyles = {
    flexGrow: 1,
    padding: 2,
    py: '2rem',
    px: '3rem',
    backgroundColor: '#FFFFFF',
  };

  const contactHeading = {
    py: 2,
    fontWeight: 900,
    color: 'inherit',
  };

  return (
    <div id="Contact">
      <Box
        sx={{
          ...boxStyles,
        }}
      >
        <Typography
          textAlign="center"
          variant="h3"
          sx={{ ...contactHeading }}
          gutterBottom
        >
          Contact Me
        </Typography>
        <Typography textAlign="center" variant="h6" gutterBottom>
          Interested on my services and want to reach out then here is your
          chance
        </Typography>

        <StyledContainer component="main" maxWidth="xs" sx={{ padding: 4 }}>
          <form onSubmit={handleSubmit}>
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
              sx={{ marginTop: 2 }}
            >
              Send
            </Button>
          </form>
        </StyledContainer>
        
      </Box>
    </div>
  );
};

export default ContactForm;
