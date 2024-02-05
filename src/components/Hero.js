import React, { useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const HeroSection = ({ scrollToComponent}) => {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);
  
  const handleButtonClick = () => {
    scrollToComponent.current.scrollIntoView({ behavior: 'smooth'})
  }
  return (
    <Container maxWidth="lg" 
    style={{ 
      paddingTop: '200px', paddingBottom: '32px',  textAlign: 'center', paddingTop: '50px'
       }}>
        <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: -1,
      }} />
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} data-aos="fade-up">
          <header>
            <Typography sx={{color:'white'}} data-aos="fade-down" variant="h2" gutterBottom>
              Empower Your Business with "InfiniMVP"
            </Typography>
          </header>
          <Typography sx={{color:'white'}}  data-aos="fade-up" variant="h5" color="textSecondary" paragraph>
            From Concept to Code(MVP) in less time than you can say 1, 2, 3...
          </Typography>
          <Button onClick={handleButtonClick} data-aos="zoom-in" variant="contained" color="primary" sx={{backgroundColor:'gold', color:'black', '&:hover': {
                    backgroundColor: 'green', // This will be applied on hover
                    color: 'white', // Optional: changing text color on hover
                     
                  },
        }} size="large" endIcon={<ArrowForwardIcon/>}>
            Get Started
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
