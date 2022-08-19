
import React, { useState, useEffect } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


import styles from './header.module.css';



const Header = () => {
  const [color, setColor] = useState<string>('transparent');
  const handleScrollbar = () => {
    if(window.pageYOffset < 100) setColor("transparent")
    else if( window.pageYOffset >= 100 ) setColor('black');
    else setColor('#020207');
  }

  useEffect(() => {
   window.addEventListener('scroll', handleScrollbar) 
  });

  return(
    <>
      <Box sx={{width: '100%', background: `${color}` , position:'fixed', top:'0px', zIndex:'100000 !important', transition: '0.5s'}}>
        <Box className={  styles.header_container}>
          <img src='./images/landing/logo.png' alt='logo' style={{marginRight:'20px'}} />
          
          <Stack sx={{width:'90%'}} direction='row' alignItems='center' justifyContent='space-between'>
            <Stack className={styles.header_left}  direction='row' alignItems='center' spacing={2}>
              <Link to='/'>ABOUT</Link>
              <Link to='/'>TOKENNOMICS</Link>
              <Link to='/'>FEATURES</Link>
              <Link to='/'>ROADMAP</Link>
              <Link to='/'>FAQS</Link>
              <Link to='/'>CONTACT</Link>
            </Stack>
            <Stack className={styles.header_right}   direction='row' alignItems='center' spacing={2}>
              <a href='/'>WHITEPAPER</a>
              <a href='/'>BUY JACK</a>
              <a href='/'>PLAY BONE HUNTER</a>
              <a href='/'>FIRE SWAP</a>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}


export default Header;