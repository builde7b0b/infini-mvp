import React, {useEffect} from 'react';
import { Card, CardContent, Typography, List, ListItem, Button, CardActions, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star'; // For the 'Most Popular' icon
import 'aos/dist/aos.css';
import AOS from 'aos';


const tiers = [
  {
    name: 'Standard',
    price: '$1k',
    features: [
      'One request at a time',
      'Average 2-week delivery',
      'Unlimited brands',
      'Unlimited users',
      'Unlimited stock photos and video elements',
      'Easy Credit-Card payments',
      'Pause or Cancel anytime',
    ],
    isPopular: true,
  },
  {
    name: 'MVP',
    price: '$5k',
    features: [
      'Double requests',
      'Free Design Sprint (1-Week Delivery)',
      'Average 1-week delivery',
      'Unlimited brands',
      'Unlimited users',
      'Unlimited stock photos and video elements',
      'Easy Credit-Card payments',
      'Pause or Cancel anytime',
    ],
    isPopular: false,
  },
];

const TierComponent = ({scrollToComponent}) => {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);

  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
        <Typography data-aos="slide-up" variant="h2">Choose Your Tier</Typography>
      {tiers.map((tier, index) => (
        <Card data-aos="flip-right" key={index} sx={{ maxWidth: 345, margin: 2, backgroundColor:'black', position: 'relative', boxShadow: 3 }}>
          {tier.isPopular && (
            <Box position="absolute" top={-10} right={-10} bgcolor="gold" borderRadius="50%" padding={1}>
              <StarIcon />
            </Box>
          )}
          <CardContent sx={{color:'white'}}>
            <Typography variant="h5" component="div">
              {tier.name} - {tier.price}
            </Typography>
            <List>
              {tier.features.map((feature, idx) => (
                <ListItem key={idx}>
                  <Typography variant="body2">{feature}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'center',}}>
            <Button href="https://buy.stripe.com/9AQ02t30S4nhb6gfYY" sx={{backgroundColor: 'gold', color:'black', margin:'22px', '&:hover': {
                    backgroundColor: 'green', // This will be applied on hover
                    color: 'white', // Optional: changing text color on hover
                  },}} color="primary" variant="contained" size="large">Choose {tier.name}</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default TierComponent;
