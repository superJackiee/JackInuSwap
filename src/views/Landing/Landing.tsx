import React from 'react';
import { Box } from '@mui/material';
import Header from './components/header';
import JackInu from './section/jackInu';
import Medium from './section/medium';
import Solution from './section/solution';
import Tokenomics from './section/Tokenomics';
import RoadMap from './section/roadmap';
import Footer from './components/footer';
import Distribution from './section/Distribution';
import ScrollTop from './components/scrollTop';


const Landing = () => {
  return(
    <>
      <ScrollTop/>
      <Header/>
      <Box sx={{width:'100%'}} >
        <JackInu/>
        <Medium/>
        <Solution/>
        <Tokenomics/>
        <Distribution/>
        <RoadMap/>
        
      </Box>
      <Footer/>
    </>

  );
}


export default Landing;