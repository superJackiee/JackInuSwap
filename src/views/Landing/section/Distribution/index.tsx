
import React from 'react';
import { Box, Typography } from '@mui/material';
import PieChart from "views/Landing/components/chart";
import './distribution.css';



const Distribution = () => {
  return(
    <>
      <Typography className='distribution_title'>Token Distribution</Typography>
      <Box className='distribution'>
        <PieChart/>
      </Box>
    </>

  );
}

export default Distribution;