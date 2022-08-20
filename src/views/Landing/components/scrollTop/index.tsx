import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import StraightIcon from '@mui/icons-material/Straight';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';




const ScrollTop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleScrollbar = () => {
    
    if( window.pageYOffset > 200 ) setVisible(true);
    else setVisible(false);
  }

  useEffect(() => {
   window.addEventListener('scroll', handleScrollbar);
  });

  
  return(
    <>
      {
        visible && 
        <Link to="scrollup" spy='true' smooth='true' >
          <Box sx={{position:'fixed', bottom:'40px', right:'40px', zIndex: '100000000 !important'}}>
            
              <Fade bottom >
              
                <IconButton 
                  sx={{
                    color:'white', 
                    background:'#d2793d', 
                    borderRadius:'5px',
                    width:'35px', 
                    height:'35px',
                    
                    "&:hover":{
                      background:'white',
                      color:'#d2793d'
                    }
                  }}>
                  <StraightIcon />
                </IconButton>
              
              </Fade>
              
          </Box>
        </Link>
      }
      {
        !visible && 
        <Box sx={{position:'fixed', bottom:'-100px', right:'-100px',display:'none'}}>
          <Fade top  >
            <IconButton 
              sx={{
                color:'white', 
                background:'#d2793d', 
                borderRadius:'5px',
                width:'35px', 
                height:'35px',
                "&:hover":{
                  background:'white',
                  color:'#d2793d'
                }
              }}>
              <StraightIcon />
            </IconButton>
          </Fade>
        </Box>
      }
    </>
  );
}

export default ScrollTop;