
import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, IconButton } from '@mui/material';
import { Link } from 'react-scroll';

import MenuIcon from '@mui/icons-material/Menu';

import styles from './header.module.css';



const Header = () => {
  const [color, setColor] = useState<string>('transparent');
  const [showHambuger, setShowHambuger] = useState<boolean>(false);
  const handleScrollbar = () => {
    if(window.pageYOffset < 100) setColor("transparent");
    else if( window.pageYOffset >= 100 ) setColor('black');
    else if( window.pageYOffset >= 300 ) setColor('#020207');
  }

  useEffect(() => {
   window.addEventListener('scroll', handleScrollbar) 
  });

  return(
    <>
      <Box id='header' className={styles.header_body} sx={{width: '100%', background: `${color}` , position:'fixed', top:'0px', zIndex:'100000 !important', transition: '0.5s'}}>
        <Box  className={  styles.header_container}>
          <img style={{marginRight:'20px'}} src='./images/landing/logo.png' alt='logo' />
          <Box className={styles.menu_item}>
            <Stack className={styles.header_left}  direction='row' alignItems='center' spacing={2}>
            {/* <Link containerId="about" spy={true} smooth={true} className="menuitem">Grill section</Link> */}

              <Link to='about'  offset={-230} spy='true' smooth='true' >ABOUT</Link>
              <Link to='tokenomics' offset={-230} spy='true' smooth='true'>TOKENNOMICS</Link>
              <Link to='features' offset={-230} spy='true' smooth='true'>FEATURES</Link>
              <Link to='roadmap'  offset={-230}spy='true' smooth='true'>ROADMAP</Link>
              <Link to='faq'>FAQS</Link>
              <Link to='contact' offset={-230} spy='true' smooth='true'>CONTACT</Link>
            </Stack>
            <Stack className={styles.header_right} justifyContent='right'  direction='row' alignItems='center' spacing={2}>
              <a href='/'>WHITEPAPER</a>
              <a href='/'>BUY JACK</a>
              <a href='/'>PLAY BONE HUNTER</a>
              <a href='/'>FIRE SWAP</a>
            </Stack>
          </Box>

          <IconButton onClick={() => setShowHambuger(!showHambuger)} className={styles.menu_btn} sx={{ background:'#d2793d', width:'60x', height:'40px', borderRadius:'8px', marginTop:'50px', marginRight:'10px'}}>
              <MenuIcon sx={{color:'white'}}/>
          </IconButton>
        </Box>

        {
          showHambuger &&
            <Stack className={styles.hambuger_menu} direction='column' spacing={2}>
              <Stack className={styles.header_left}  direction='column' alignItems='start'>
                <Link to='about' offset={-230} spy='true' smooth='true'>ABOUT</Link>
                <Link to='tokenomics' offset={-230} spy='true' smooth='true'>TOKENNOMICS</Link>
                <Link to='features' offset={-230} spy='true' smooth='true'>FEATURES</Link>
                <Link to='roadmap' offset={-230} spy='true' smooth='true'>ROADMAP</Link>
                <Link to='faq' offset={-230} spy='true' smooth='true'>FAQS</Link>
                <Link to='contact' offset={-230} spy='true' smooth='true'>CONTACT</Link>
              </Stack>
              <Stack className={styles.header_right}  direction='row' alignItems='start'  flexWrap='wrap'>
                <a href='/'>WHITEPAPER</a>
                <a href='/'>BUY JACK</a>
                <a href='/'>PLAY BONE HUNTER</a>
                <a href='/'>FIRE SWAP</a>
              </Stack>
            </Stack>
        }
      </Box>
    </>
  );
}


export default Header;