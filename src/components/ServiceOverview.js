import React, {useEffect} from 'react';
import { Container, Button, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


const services = [
  { title: "Unlimited MVP Applications", description: "Tailored solutions for businesses to rapidly prototype their ideas." },
  { title: "Subscription-Based Model", description: "Flexible and predictable pricing with no hidden costs." },
  { title: "Web Development & Design", description: "High-quality web design and development services." },
  { title: "Unlimited Requests", description: "Submit as many requests as you need - we've got you covered." },
  { title: "Cancel Anytime", description: "No long-term contracts, cancel your subscription anytime." }
];

const ServiceOverview = ({scrollToComponent}) => {
    useEffect(() => {
        AOS.init({duration: 1200});
      }, []);
      const handleButtonClick = () => {
        scrollToComponent.current.scrollIntoView({ behavior: 'smooth'})
      }
  return (
    <Box sx={{ backgroundColor:'#FAFAFA', flexGrow: 1, padding: '2rem' }}>
      {/* <Typography variant="h4" gutterBottom align="center">
        Our Services
      </Typography> */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{backgroundColor:'black'}} data-aos="zoom-in" raised>
              <CardContent sx={{color:'white'}}>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">
                  {service.description}
                </Typography>
               

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container sx={{
        textAlign: 'center',
      }}>
            <Button sx={{
                margin:"32px", marginBottom:"32px", backgroundColor:'gold', color:'black', '&:hover': {
                  backgroundColor: 'green', // This will be applied on hover
                  color: 'white', // Optional: changing text color on hover 
                },
            }} size="large" data-aos="zoom-in" variant="contained" color="primary" href="https://calendly.com/eugenese/let-s-talk-solutions">
                Book a Call
            </Button>
            <Button sx={{
                margin:"32px", marginBottom:"32px", backgroundColor:'gold', color:'black', '&:hover': {
                  backgroundColor: 'green', // This will be applied on hover
                  color: 'white', // Optional: changing text color on hover 
                },
            }} size="large" data-aos="zoom-in" variant="contained" color="primary" onClick={handleButtonClick}>
                Meet the Team
            </Button>
      </Container>
      
    </Box>
  );
};

export default ServiceOverview;
