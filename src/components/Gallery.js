import React, {useEffect} from 'react';
import {Container, Grid, Card, CardMedia, CardContent, Typography, Button} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ElvenImg from '../assets/images/UI_Chatbot.webp';
import NFTImg from '../assets/images/nftx.png';
import ChainBrainImg from '../assets/images/chainbrain.png';
import GalleryPDF from '../assets/PDF/Eugene_SE_EPK.pdf'


const projects = [
    {
        imageUrl: ElvenImg,
        title:'ElvenAI',
        description:"Explore Your Spiritual Journey with Elven AI. We harness the knowledge of tarot, astrology, and mindfulness to provide users with thoughtful and personalized experiences. Our chatbot is designed to be a companion on your journey towards inner peace, enlightenment, and self-awareness.",
        link: 'https://ai.elvenenchantments.art/',
    },
    {
        imageUrl: ChainBrainImg,
        title:'ChainBrainCrypto',
        description:"ChainBrainCryptoBot is more than just a trading bot; it's a sophisticated tool that adapts to market changes swiftly, offering YOU a Competitive Edge. Whether you're looking to Automate your Trading Process, Reduce Emotional Decision-Making, or simply Save Time, ChainBrainCryptoBot is your Go-To Solution for Cchieving your crypto trading Objectives with Confidence and Ease.",

    },
    {
        imageUrl: NFTImg,
        title:'NFTCollectX Pro',
        description:"Manage Your NFT Project & Users Information Securely and Easily. Our platform is designed for NFT collection owners to collect, manage, and engage with their community through email list.",
    },
  
    //ad projects
];

const Gallery = () => {
    useEffect(() => {
        AOS.init({duration: 1200});
      }, []);
    return (
      <Grid sx={{
        backgroundColor: 'black',
      }} container spacing={4}>
        {projects.map((project, index) => (
          <Grid  item xs={12} sm={6} md={4} key={index}>
            <Card data-aos="zoom-in">
              <CardMedia
                component="img"
                height="140"
                image={project.imageUrl}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Container sx={{
            textAlign:'center',
        }}>
        <Button sx={{
            margin: '32px',
            backgroundColor: '#FFD700',
            color:'black',
            '&:hover': {
              backgroundColor: 'green', // This will be applied on hover
              color: 'white', // Optional: changing text color on hover
               
            },
        }} size="large" data-aos="zoom-in" variant="contained" color="primary" href={GalleryPDF}>
          View More
        </Button>
        </Container>
        
      </Grid>
    );
  };
  
  export default Gallery;