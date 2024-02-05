import React, {useEffect} from 'react';
import { Divider, Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StarIcon from '@mui/icons-material/Star'; // For the 'Most Popular' icon
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


const pricingOptions = [
  { title: "In-House Engineer", description: "Expensive, but high control over projects.", price: "High Cost - ~$70-100K/yearly", color: "red" },
  { title: "Hire an Agency", description: "Professional but often costly.", price: "Variable Cost - ~15-50k/One-Time", color: "red" },
  { title: "Find a Contractor", description: "Less expensive but can be time-consuming.", price: "Medium Cost - $5K-50K/contract", color: "red" },
  { title: "Hire Us", description: "Perfect balance of cost, quality, and efficiency.", price: " $999/m - SUBSCRIBE NOW ", isPopular: true, color: "green" }
];

const Pricing = ({scrollToComponent}) => {
    useEffect(() => {
        AOS.init({duration: 1200});
      }, []);

      const handleButtonClick = () => {
        scrollToComponent.current.scrollIntoView({ behavior: 'smooth'})
      }
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <Divider style={{ margin: '20px 0' }} />
      <Typography variant="h4" gutterBottom align="center">
        Pricing Comparison
      </Typography>
      <Divider style={{ margin: '20px 0' }} />
      <Grid container spacing={4} justifyContent="center">
        {pricingOptions.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            
            <Card data-aos="flip-left" raised sx={{ backgroundColor: option.color }}>
            {option.isPopular && (
            <Box position="absolute" top={-10} right={-10} bgcolor="gold" borderRadius="50%" padding={1}>
              <StarIcon />
            </Box>
          ) 
          }
          {!option.isPopular && (
            <Box position="absolute" top={-5} right={-5} bgcolor="red" borderRadius="50%" padding={1}>
            <ThumbDownAltIcon />
          </Box>

          )}
              <CardContent>
                <Typography sx={{color:'white'}} variant="h6" gutterBottom>
                  {option.title}
                </Typography>
                <Typography sx={{color:'white',
                fontSize: option.isPopular ? '1.25rem' : '1rem', // Larger font if isPopular
                animation: option.isPopular ? 'pulseAnimation 2s infinite' : 'none' // Apply animation if isPopular
              }} variant="body1">
                  {option.description}
                </Typography>
                <Typography sx={{color:'white'}} variant="body1">
                  {option.price}
                </Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center',}}>
                {option.isPopular && (
                  <Button sx={{
                  backgroundColor:'gold',
                  color: 'black',
                  margin: '22px',
                  '&:hover': {
                    backgroundColor: 'green', // This will be applied on hover
                    color: 'white', // Optional: changing text color on hover
                     
                  },
                    
                }} onClick={handleButtonClick} variant="contained" size="large" color="primary">Subscribe Now</Button>

                )
              }
                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;
