import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Typography } from '@mui/material';
import Lottie from "lottie-react";
import dog from './dog2.json'
import styles from './medium.module.css';


const Medium = () => {
  
  return(
    <>
      <Box id='about' className={styles.m_container}>
        <Box className={styles.m_main}>
           <Lottie  animationData={dog} style={{width:'30%'}}  />
           <Box className={styles.right}>
            <Fade bottom style={{zIndex:'1000 !important'}}>
              <Typography className={styles.title}>JACK is a community<br/>based DeFi project</Typography>
            </Fade>
            

            <Typography className={styles.content} sx={{color:'#d2793d', mb:'70px'}}>with an innovative reward system for its holders through future ecosystem development which includes creating a Play-To-Earn game (BONE HUNTER) where players will earn $JACK by simply playing, staking/yield farming pools with mouthwatering APY. and a host of benefits and utilities for our holders.</Typography>

            <Typography className={styles.title}>JACK is Built Different!</Typography>
            <Typography className={styles.content} sx={{color:'white'}}>$JACK was born with a competitive edge. The tokenomics of this project are actively working in favor of long term holders. With added liquidity locks, vesting periods,  $JACK can only go in one direction: UP!</Typography>

            <Typography className={styles.title_bold} sx={{mt:'70px'}}>JACK: Can Ride EVERYONE To The MOON</Typography>
            <Typography className={styles.description}>Our goal is to create a token that rewards the people who believe in it the longest. Through frictionless yield generation, holders will receive additional $JACK directly into their wallet on a regular basis.</Typography>
            <Typography className={styles.description}>We will be exploring many trends and viral marketing strategies in order to spread the word. And of course we are counting on all of you Jack army out there to help us with that as well.</Typography>
            <Typography className={styles.description}>A strong marketing effort is very important to us. Why? Because we want to build a community stronger than any other. The #JackArmy has the power, if united, to change many lives and become something for the history books.</Typography>
            <Typography className={styles.description}>All that combined will make for a very profitable launch for everyone involved!</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}


export default Medium;