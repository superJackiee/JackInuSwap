import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import StraightIcon from '@mui/icons-material/Straight';
import Fade from 'react-reveal/Fade';




const ScrollTop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleScrollbar = () => {
    
    if( window.pageYOffset > 200 ) setVisible(true);
    else setVisible(false);
    console.log("positio:::", window.pageYOffset)
  }

  useEffect(() => {
   window.addEventListener('scroll', handleScrollbar);
  });

  
  return(
    <>
      {
        visible && 
        <Box sx={{position:'fixed', bottom:'20px', right:'20px',}}>
          <Fade bottom >
            <IconButton 
              sx={{
                color:'white', 
                background:'#d2793d', 
                borderRadius:'10px', 
                
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
      {
        !visible && 
        <Box sx={{position:'fixed', bottom:'-100px', right:'-100px',display:'none'}}>
          <Fade top  >
            <IconButton 
              sx={{
                color:'white', 
                background:'#d2793d', 
                borderRadius:'10px', 
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