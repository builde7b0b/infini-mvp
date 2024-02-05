import React, {useEffect} from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';




const integrations = [
  // Add your integration details here
  {
    logoUrl:'https://1000logos.net/wp-content/uploads/2021/06/Stripe-Logo-2009.png'

  },
  {
    logoUrl:'https://1000logos.net/wp-content/uploads/2020/05/Google-Maps-logo.jpg'
  },
  {
    logoUrl:'https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png'
  },
  {
    logoUrl:'https://1000logos.net/wp-content/uploads/2017/08/Salesforce-Logo.png'
  },
  {
    logoUrl:'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
  },
  {
    logoUrl:'https://1000logos.net/wp-content/uploads/2020/05/Google-Maps-logo.jpg'
  },
];

const Integrations = () => {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);
  return (
    <Box sx={{margin:'10px'}}>
      {/* <Typography data-aos="fade-up" variant="h4" gutterBottom align="center">
        Integrations
      </Typography> */}
      <Grid container spacing={4} justifyContent="center">
        {integrations.map((integration, index) => (
          <Grid data-aos="zoom-in" item xs={6} sm={4} md={3} key={index}>
            <img src={integration.logoUrl} alt={integration.name} style={{ maxWidth: '100%' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Integrations;
