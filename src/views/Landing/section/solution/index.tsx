import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
// import CheckIcon from '@mui/icons-material/Check';
import styles from './solution.module.css';


const Title = styled('span')({
  fontSize:'1.33em',
  color:'white',
  margin: '0 auto',
  fontWeight: 600
})

const Content = styled('span')({
  fontSize: '15px',
  lineHeight:'30px',
  fontWeight: 300,
  marginTop:'20px'
})


const Solution = () => {
  return(
    <>
      <Box className={styles.solution_containter}>
        <Box className={styles.solution_main}>
          <Fade bottom style={{zIndex:'1000 !important'}}>
            <Box sx={{position:'relative'}}>
              <Typography className={styles.effect_title}>
                SOLUTION
              </Typography>
              <Typography  className={styles.title}>
                JACK CORE VALUES AND KEY FEATURES
              </Typography>
            </Box>
          </Fade>

          <Stack direction='column' alignItems='center' justifyContent='center' spacing={3}>
            <img style={{width:'160px', height:'160px'}} src='./images/landing/service-icon-d.png' alt='A' />
            <Title>Safety and Security</Title>
            <Stack direction='column' alignItems='center' justifyContent='center'>
              <Content sx={{color:'white'}}>Locked Liquidity.</Content>
              <Stack direction='row' alignItems='center'>
                {/* <CheckIcon sx={{color:'white'}}/> */}
                <Content sx={{color:'white', marginTop:'0px'}}>KYC & Audit pending</Content>
              </Stack>
              
            </Stack>
          </Stack>

          <Stack direction='column' alignItems='center' justifyContent='center' spacing={3}>
            <img style={{width:'160px', height:'160px'}} src='./images/landing/service-icon-c.png' alt='B' />
            
            <Stack direction='column' alignItems='center' justifyContent='center'>
              <Title>Community</Title>
              <Content sx={{color:'#a2b4d2'}}>We are proud of our shared vision, which was created by and for the people. We support each other and other groups when having a good time.</Content>
            </Stack>
          </Stack>

          <Stack direction='column' alignItems='center' justifyContent='center' spacing={3}>
            <img style={{width:'160px', height:'160px'}} src='./images/landing/service-icon-a.png' alt='C' />
            <Stack direction='column' alignItems='center' justifyContent='center'>
              <Title>Sustainabillity</Title>
              <Content sx={{color:'#a2b4d2'}}>The future is upon us, and we are prepared. We weigh the consequences of any action we make, and we are dedicated to a long-term strategy.</Content>
            </Stack>
          </Stack>
          
        </Box>
      </Box>
    </>
  );
}


export default Solution;