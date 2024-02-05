import React from 'react';
import { Box, Grid, Typography, Button, Avatar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import headshotimg from '../assets/headshot.jpeg';


const UserProfileSection = ({scrollToComponent}) => {
  return (
    <Box sx={{ bgcolor: 'black', p: 3, borderRadius: 2, boxShadow: 3, my: 4 }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Avatar
            alt="Your Name"
            src={headshotimg} // Replace with your headshot URL
            sx={{ width: 200, height: 200, mx: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={9} textAlign={{ xs: 'center', sm: 'left' }}>
          <Typography sx={{color:'white'}} variant="h4" gutterBottom>
            Hi, I'm Eugene
          </Typography>
          <Typography sx={{color:'white'}} variant="subtitle1" gutterBottom>
            "Your Full-Stack Software Engineer"
          </Typography>
          <Box>
            <Button
              
              href="https://www.linkedin.com/in/eugene-brown-jr-38210b99/" // Replace with your LinkedIn URL
              target="_blank"
              sx={{ mr: 1 }}
            >
              LinkedIn
            </Button>
            <Button
              
              href="https://github.com/builde7b0b" // Replace with your GitHub URL
              target="_blank"
            >
              GitHub
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfileSection;
