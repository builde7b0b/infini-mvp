import React, { useState } from 'react';
import {Divider,  Tabs, Tab, Box, Typography, Paper } from '@mui/material';

import image1 from '/Users/wealthybeans/GIT/CodeContinuum/code-continuum/src/assets/images/chainbrain.png'
import chainBrainGif from '/Users/wealthybeans/GIT/CodeContinuum/code-continuum/src/assets/gifs/chaingif.gif';
import ElvenAIGIf from '/Users/wealthybeans/GIT/CodeContinuum/code-continuum/src/assets/gifs/InnovateWith.codes.gif';
import challengesGif from '/Users/wealthybeans/GIT/CodeContinuum/code-continuum/src/assets/gifs/challenges.gif';
import solutionsGif from '/Users/wealthybeans/GIT/CodeContinuum/code-continuum/src/assets/gifs/solutions.gif';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const CaseStudiesComponentX = () => {
  const [mainTabValue, setMainTabValue] = useState(0);
  const [subTabValue, setSubTabValue] = useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTabValue(newValue);
    setSubTabValue(0); // Reset sub tab when main tab changes
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTabValue(newValue);
  };

  // Replace with your case studies data
  const caseStudies = [
    {
      title: "NFT Email Collector App: Revolutionizing Communication in the NFT Space",
      challenges: "Need for Efficient Communication: Addressing the gap in direct communication between NFT collection owners and their holders. \n\nVerification of NFT Ownership: Ensuring accurate verification of NFT ownership to gather legitimate email contacts.\n\nIntegration of Diverse Technologies: Combining Flask/Python, MongoDB, Mailgun, and Etherscan API into a cohesive system. \n\nUser-Friendly Interface: Developing an intuitive user interface for both NFT owners and collection owners..",
      
      solutions: "Robust Backend with Flask and Python: Utilized Python with Flask for a stable and efficient backend development. \n\nMongoDB for Flexible Data Management: Adopted MongoDB to handle diverse data formats and ensure scalability. \n\nMailgun for Reliable Email Communication: Integrated Mailgun API for efficient email verification and communication. Etherscan for Accurate NFT Verification: Implemented Etherscan API to authenticate NFT ownership reliably. \n\nStreamlined User Experience: Designed a straightforward and user-friendly interface, enhancing user engagement and ease of use.",
      outcomes: "Effective Communication Channel: Established a direct and efficient line of communication between NFT collection owners and holders. \n\nHigh User Adoption and Engagement: Witnessed a significant uptick in user adoption, with positive feedback on the app’s functionality. \n\nAccurate Collection of Verified Emails: Successfully collected and verified a substantial number of email addresses, aiding in marketing and community building. \n\nContinuous Improvement and Expansion: Post-launch enhancements based on user feedback, leading to an increasingly robust and versatile application.",
      challengesLink: challengesGif,
      solutionsLink: solutionsGif,
      mockupLink: "",
    },
    {
        title: "ChainBrain Crypto: Simplifying Cryptocurrency Insights through a User-Friendly Telegram Bot",
        challenges: "The project aimed to create a centralized platform for crypto insights, addressing the lack of easily accessible, aggregated crypto information.",
        solutions: "ChainBrain Crypto was conceptualized as a Telegram bot, leveraging Python/Flask for backend flexibility and MongoDB for data storage, with a focus on rapidly achieving an MVP.",
        outcomes: "The bot significantly simplified user interactions, offering efficient query handling and data management, with robust security and privacy measures. It received positive feedback for providing timely market insights.",
        
        mockupLink: chainBrainGif,
        challengesLink: challengesGif,
        solutionsLink: solutionsGif,

      },
      {
        title: "ElvenAI Spiritual ChatBot: ",
        challenges: "The project aimed to create a centralized platform for crypto insights, addressing the lack of easily accessible, aggregated crypto information.",
        solutions: "ChainBrain Crypto was conceptualized as a Telegram bot, leveraging Python/Flask for backend flexibility and MongoDB for data storage, with a focus on rapidly achieving an MVP.",
        outcomes: "The bot significantly simplified user interactions, offering efficient query handling and data management, with robust security and privacy measures. It received positive feedback for providing timely market insights.",
        
        mockupLink: ElvenAIGIf,
        challengesLink: challengesGif,
        solutionsLink: solutionsGif,

      },
    // Add more case studies
  ];

  const RenderWithLineBreaks = ({ text }) => {
    return (
      <>
        {text.split('\n\n').map((line, index) => (
          <p key={index} style={{ marginBottom: '1rem' }}>{line}</p>
        ))}
      </>
    );
  };
  

  return (
    <Paper elevation={3} sx={{ margin: '2rem', padding: '1rem' }}>
         <Typography data-aos="fade-up" data variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Case Studies: Breakdown
      </Typography>

        <Divider style={{ margin: '20px 0' }} />
      <Tabs value={mainTabValue} onChange={handleMainTabChange} centered>
        {caseStudies.map((study, index) => (
          <Tab label={study.title} key={index} />
        ))}
      </Tabs>

      {caseStudies.map((study, index) => (
        <TabPanel value={mainTabValue} index={index} key={index}>
          <Tabs
            value={subTabValue}
            onChange={handleSubTabChange}
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Challenges" />
            <Tab label="Solutions" />
            <Tab label="Outcomes" />
          </Tabs>
          <TabPanel value={subTabValue} index={0}>
          <RenderWithLineBreaks text={study.challenges} />
          <Box
    sx={{
      width: '100%', // Adjust the width as needed
      height: 'auto', // Adjust the height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <img 
      src={study.challengesLink} 
      alt="Description"
      style={{ 
        maxWidth: '100%', // Ensures the image is fully contained within its parent
        height: 'auto', // Maintains aspect ratio
        objectFit: 'contain'
      }} 
    />
  </Box>
          </TabPanel>
          <TabPanel value={subTabValue} index={1}>
          <RenderWithLineBreaks text={study.solutions} />
          <Box
    sx={{
      width: '100%', // Adjust the width as needed
      height: 'auto', // Adjust the height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <img 
      src={study.solutionsLink} 
      alt="Description"
      style={{ 
        maxWidth: '100%', // Ensures the image is fully contained within its parent
        height: 'auto', // Maintains aspect ratio
        objectFit: 'contain'
      }} 
    />
  </Box>
          </TabPanel>
          <TabPanel value={subTabValue} index={2}>
          <RenderWithLineBreaks text={study.outcomes} />
          <Box
    sx={{
      width: '100%', // Adjust the width as needed
      height: 'auto', // Adjust the height as needed
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <img 
      src={study.mockupLink} 
      alt="Description"
      style={{ 
        maxWidth: '100%', // Ensures the image is fully contained within its parent
        height: 'auto', // Maintains aspect ratio
        objectFit: 'contain'
      }} 
    />
  </Box>
          
          </TabPanel>
        </TabPanel>
      ))}
    </Paper>
  );
};

export default CaseStudiesComponentX;
