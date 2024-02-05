import React, {useEffect} from 'react';
import { CardActions, Divider, Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import 'aos/dist/aos.css';
import AOS from 'aos';


const caseStudies = [
  // Example case studies - replace with real data
  {
    title: 'Revolutionizing E-Commerce',
    description: 'A journey of transforming a traditional retail business into a leading e-commerce platform.',
    imageUrl: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300',
    outcome: 'Increased online sales by 300% in the first six months.'
  },
  {
    title: 'Streamlining Healthcare Management',
    description: 'Developing a comprehensive SaaS solution for hospital management.',
    imageUrl: 'https://images.pexels.com/photos/6069237/pexels-photo-6069237.jpeg?auto=compress&cs=tinysrgb&w=300',
    outcome: 'Improved patient handling efficiency by 40%.'
  },
  // Add more case studies as needed
];

const CaseStudiesComponent = ({scrollToComponent}) => {
  useEffect(() => {
    AOS.init({duration: 1200});
  }, []);
  const handleButtonClick = () => {
    scrollToComponent.current.scrollIntoView({ behavior: 'smooth'})
  }
  return (
    <Box sx={{  flexGrow: 1, padding: '3rem' }}>
      <Divider style={{ margin: '20px 0' }} />
      <Typography data-aos="fade-up" data variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Case Studies & Success Stories
      </Typography>
      <Divider style={{ margin: '20px 0' }} />

      <Grid container spacing={4} justifyContent="center">
        {caseStudies.map((study, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card data-aos="flip-right"  sx={{ backgroundColor: 'black', maxWidth: 345, boxShadow: 5 }}>
              <CardMedia
                component="img"
                height="140"
                image={study.imageUrl}
                alt={study.title}
              />
              <CardContent>
                <Typography sx={{color:'white'}} gutterBottom variant="h5" component="div">
                  {study.title}
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                  {study.description}
                </Typography>
                <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold', marginTop: '1rem', color:'white' }}>
                  Outcome: {study.outcome}
                </Typography>
              </CardContent>
              <CardActions sx={{display: 'flex', justifyContent: 'center',}}>
              <Button sx={{
                  backgroundColor:'gold',
                  color:'black',
                  '&:hover': {
                    backgroundColor: 'green', // This will be applied on hover
                    color: 'white', // Optional: changing text color on hover
                     
                  },
                    
                }} data-aos="zoom-in" onClick={handleButtonClick} size="large" color="primary">Read More</Button>
              </CardActions>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudiesComponent;
