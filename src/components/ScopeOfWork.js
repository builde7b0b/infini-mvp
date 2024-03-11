import React, {useEffect} from 'react';
import { Box, Typography, Divider, Grid, Card, CardContent } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';


const scopeItems = [
    { title: 'SaaS Platforms', description: 'Building scalable and efficient Software as a Service applications.' },
    { title: 'Custom Websites', description: 'Creating unique websites tailored to your business needs.' },
    { title: 'Rapid Prototyping', description: 'Quickly turning ideas into working prototypes to accelerate development cycles.' },
    { title: 'User Experience Design', description: 'Crafting intuitive and engaging user experiences for all digital products.' },
    { title: 'Market Validation Support', description: 'Providing insights and support for validating your MVP in the target market.' },
    { title: 'Lean Development Methodology', description: 'Employing lean principles to ensure efficient and agile product development.' },
    { title: 'Customizable Feature Set', description: 'Building MVPs with adaptable features based on core business needs.' },
    { title: 'Scalability Planning', description: 'Creating MVPs with future growth and scalability in mind.' },
    { title: 'Feedback Integration', description: 'Incorporating user feedback to refine and improve the MVP post-launch.' },
    { title: 'Technology Consulting', description: 'Advising on the best tech stacks and tools for your specific MVP requirements.' }
  ];
  

const ScopeOfWork = () => {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);
  return (
    <Box sx={{backgroundColor: 'gold',}}>
      <Divider style={{ margin: '20px 0' }} />
      <Typography data-aos="slide-right" sx={{fontWeight:'bold',}} variant="h4" gutterBottom align="center">
        Our Scope of Work
      </Typography>
      <Divider style={{ margin: '20px 0' }} />
      <Typography variant="body1" align="center">
        We specialize in building a wide range of applications, from SaaS platforms to custom websites.
      </Typography>
      <Divider style={{ margin: '20px 0' }} />
      {/* Add more descriptions as needed */}

      <Grid container spacing={2} justifyContent="center">
        {scopeItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card data-aos="flip-left" sx={{ backgroundColor: 'black', minHeight: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: 3 }}>
              <CardContent>
                <Typography sx={{color:'white'}} variant="h6" gutterBottom align="center">
                  {item.title}
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" gutterBottom align="center">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScopeOfWork;
