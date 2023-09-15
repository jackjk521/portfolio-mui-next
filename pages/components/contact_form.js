import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Retrieve form data
    const formData = new FormData(e.target);
    const user_name = formData.get("name");
    const user_email = formData.get("email");
    const message = formData.get("message");

    const contactData = {
      user_name,
      user_email,
      message,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        // Contact successfully submitted
        // Do something with the response if needed
        console.log("sucess");
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ padding: 4 }}>
      {/* <Typography variant="subtitle" textAlign="center">
        Interested on my services and want to reach out then here is your chance
      </Typography> */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField variant="outlined" fullWidth label="Name" name="name" />
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
          sx={{ marginTop: 2 }}>
          Send
        </Button>
      </form>
    </Container>
  );
};

export default ContactForm;
