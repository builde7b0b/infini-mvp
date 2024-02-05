import logo from './logo.svg';
import './App.css';
import HeroSection from './components/Hero';
import ServiceOverview from './components/ServiceOverview';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Integrations from './components/Integrations';
import ScopeOfWork from './components/ScopeOfWork';
import CompanyTicker from './components/CompanyTicker';
import HorizontalScroll from './components/HorizontalScroll';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import TierComponent from './components/TierComponent';
import CaseStudiesComponent from './components/CaseStudiesComp';
import FAQComponent from './components/FAQComponent';
import React, {useRef} from 'react';
import CaseStudiesComponentX from './components/CaseStudiesComponent';
import ContactFormComponent from './components/ContactFormComponent';
import UserProfileSection from './components/UserProfileComp';

// Step 1: Create a custom theme
const theme = createTheme({
  typography: {
    allVariants: {
      fontWeight: 'bold', // This applies bold styling to all Typography variants
    },
    components: {
      Button: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: 'green',
            },
          },
        },
      },
    },
  },
  palette: {
    // Define your palette here
    primary: {
      main: '#556cd6',
    },
  },
});


function App() {
  const serviceOverviewRef = useRef(null);
  const tiersRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const userProfileRef = useRef(null);

  return (
    <>
      <ThemeProvider theme={theme}>
    <HeroSection scrollToComponent={serviceOverviewRef}></HeroSection>
   <div ref={serviceOverviewRef} >
   <ServiceOverview scrollToComponent={userProfileRef}></ServiceOverview>
    </div>
   <CompanyTicker></CompanyTicker>
   <Gallery></Gallery>
   <Integrations></Integrations>
   <Pricing scrollToComponent={tiersRef}></Pricing>
   <div ref={tiersRef}>
   <TierComponent></TierComponent>
   </div>
  
   <HorizontalScroll></HorizontalScroll>
   <ScopeOfWork></ScopeOfWork>
   <CaseStudiesComponent scrollToComponent={caseStudiesRef}></CaseStudiesComponent>
   <FAQComponent></FAQComponent>
   <div ref={userProfileRef}>
   <UserProfileSection></UserProfileSection>
   </div>
   <div ref={caseStudiesRef}>
   <CaseStudiesComponentX></CaseStudiesComponentX>
   </div>
   
   <ContactFormComponent></ContactFormComponent>
   </ThemeProvider>
   </>
   
  );
}

export default App;
