
import React from 'react';
import { Box, Typography } from '@mui/material';
import PieChart from "views/Landing/components/chart";
import './distribution.css';



const Distribution = () => {
  return(
    <>
      
      <Box className='distribution'>
        <Typography className='distribution_title'>Token Distribution</Typography>
        <PieChart/>
      </Box>
    </>

  );
}

export default Distribution;