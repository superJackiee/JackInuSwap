import React from 'react';
import { Box } from '@mui/material';
import Header from './components/header';
import JackInu from './section/jackInu';
import Medium from './section/medium';
import Solution from './section/solution';
import Tokenomics from './section/Tokenomics';
import RoadMap from './section/roadmap';
import Footer from './components/footer';
import PieChart from './components/chart';
import styles from './index.module.css';
import ScrollTop from './components/scrollTop';


const Landing = () => {
  return(
    <>
     
      <Header/>
      <Box sx={{width:'100%'}} >
        <JackInu/>
        <Medium/>
        <Solution/>
        <Tokenomics/>
        <RoadMap/>
        
      </Box>
      
      <Footer/>
      {/* <ScrollTop/> */}
    </>

  );
}


export default Landing;