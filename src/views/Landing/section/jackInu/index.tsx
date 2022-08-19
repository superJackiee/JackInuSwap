import React from 'react';
import { Box, Typography, Stack } from '@mui/material'; 
import Fade from 'react-reveal/Fade';
import Lottie from "lottie-react";
import dog from './dog1.json'
import styles from './jackInu.module.css';



const JackInu = () => {
  return(
    <>
      <section className="vc_row wpb_row vc_row-fluid mobile-center banner-particle banner-curb vc_custom_1629564107647 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex banner banner-full d-flex align-items-center">
        <div id="particles-js" className="particles-container particles-js">
          <Box className={styles.jack_container}>
              
              <Fade bottom style={{zIndex:'1000 !important'}}>
                <Box className={styles.jack_main}>
                  <Typography className={styles.title}>A Game Changer in Crypto Defi</Typography>
                  <Typography className={styles.content} >JACK is a deflationary token built to generate liquidity and yield for holders. A project that is set aside from all the others by design to help our investors to grow their wealth through  play 2 Earn games, yield farming  and Nft marketplace</Typography>
                  <Stack sx={{width:'100%'}} direction='row' justifyContent='center'>
                    <a href='/'>BUY ON PANCAKESWAP</a>
                  </Stack>
                  <Lottie  animationData={dog} className={styles.lottie_dog} />
                  <Typography className={styles.jack_content} sx={{mt: 3, pb: 2}}>
                    JACK INU
                  </Typography>
                </Box>
              </Fade>
            </Box>
        </div>
      </section>
      
    </>
  );
}


export default JackInu;