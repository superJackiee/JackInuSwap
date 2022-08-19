import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
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
        <Fade bottom style={{position:'fixed', bottom:'10', right:'10px',}}>
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
      }
      {
        !visible && 
        <Fade top  style={{position:'fixed', bottom:'10', right:'10px',}}>
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
      }
    </>
  );
}

export default ScrollTop;