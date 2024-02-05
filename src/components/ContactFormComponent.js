import React, { useEffect, useRef } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';


const ContactFormComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const formRef = useRef(null); // Create a ref for the form


  // Inside ContactFormComponent.js
// Inside ContactFormComponent.js
const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = new URLSearchParams();

  for (const pair of formData) {
    data.append(pair[0], pair[1]);
  }

  // For Google Apps Script
  await fetch('https://script.google.com/macros/s/AKfycby54cLjmnLC88EMPK2g7MFiSMiJ6JM1CdTPX9B-q84jeAI5OVY-1Egwqa0-qMnJ2NU/exec', {
    method: 'POST',
    body: data, // Sending as URL-encoded form data
  }).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    formRef.current.reset();

    Swal.fire({
      title: 'Success!',
      text: 'Your request has been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'gold',
    });

    return response.json();
    // Display success alert
    
  }).catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    Swal.fire({
      title: 'Error!',
      text: 'There was a problem submitting your form.',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  });
}



  return (
    <Box sx={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }} data-aos="fade-up">
      <Typography variant="h4" textAlign="center" gutterBottom>Contact Us</Typography>
      <form ref={formRef} onSubmit={handleSubmit}>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <TextField name="companyInfo" label="Company Information" multiline rows={4} fullWidth required />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField name="primaryContactDetails" label="Contact Person Information" multiline rows={4} fullWidth required />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField name="projectOverview" label="Project Overview" multiline rows={4} fullWidth required />
    </Grid>
    {/* <Grid item xs={12}>
      <TextField name="email" label="Email" type="email" fullWidth required />
    </Grid> */}
    <Grid item xs={12}>
      <TextField name="technicalRequirements" label="Technical Requirements" multiline rows={4} fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField name="legalityComplianceRequirements" label="Legal and Compliance Information" multiline rows={4} fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField name="additionalNotes" label="Additional Notes" multiline rows={4} fullWidth />
    </Grid>
    <Grid item xs={12}>
      <TextField name="postMVPDevInfo" label="Post MVP Development" multiline rows={4} fullWidth />
    </Grid>
    <Grid item xs={12} textAlign="center">
      <Button size="large" type="submit" variant="contained" color="primary" sx={{ mt: 2, margin: "32px", marginBottom: "32px", backgroundColor: 'gold', color: 'black', '&:hover': { backgroundColor: 'green', color: 'white' } }}>
        Submit
      </Button>
    </Grid>
  </Grid>
</form>

    </Box>
  );
};

export default ContactFormComponent;
