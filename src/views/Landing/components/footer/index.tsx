
import React from 'react';
import { Box, Typography, Stack } from '@mui/material'
import Fade from 'react-reveal/Fade';
import { FaTwitter, FaFacebookF, FaTelegram, FaGithub, FaMedium } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { TbMail } from 'react-icons/tb';
import { HiMail } from 'react-icons/hi';
import styled from 'styled-components';
import styles from './footer.module.css';

const Div = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  transition-duration: 0.3s;
  .color01{
    transition-duration: 0.3s;
    color: #4A4A4A;
  }
  &:hover{
    transition-delay: 0.1s;
    transition-duration: 0.4s;
    background: #E5894C;
    .color01{
      color: white !important;
    }
  }
`

const Title = styled.span`
  color: #E5894C;
  font-size: 12px;
`
const SocialTitle = styled.div`
  color: white;
  font-size: 11px;
  text-align: center !important;
  width: 100% !important;
  margin-top: 40px;
`

const CustTbMail = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5894C;
  border-radius: 50%;
  .cust-mail{
    width: 20px !important;
    height: 20px !important;
    color: white !important;
  }
`

const Footer = () => {
  return(
    <>
      <Box className={styles.footer_container}>
        <Box className={styles.footer_main}>
            <Fade bottom style={{zIndex:'1000 !important'}}>
              <Box sx={{position:'relative', textAlign:'center'}}>
                <Typography className={styles.contact}>CONTACT</Typography>
                <Typography className={styles.contact_jack}>CONTACT JACKINU</Typography>
              </Box>
            </Fade> 
            <Typography className={styles.description}>Any question? Reach out to us and we’ll get back to you shortly.</Typography>
            
            <Stack sx={{mt: 5}} direction='row' className={styles.person_contact} spacing={5}>
              <Stack  direction='row' spacing={2} alignItems='center'>
                <CustTbMail>
                <HiMail className='cust-mail'/>
                </CustTbMail>
                <Title>info@jackinu.io</Title>
              </Stack>
              
              
              <Stack className={styles.person_contract_child} direction='row' spacing={2} alignItems='center'>
                <CustTbMail>
                  <FaTelegram className='cust-mail'/>
                </CustTbMail>
                <Title>Join us on Telegram</Title>
              </Stack>
            </Stack>

            <Stack sx={{mt: 23}} direction='row' spacing={1.5} alignItems='center' justifyContent='center'>
              <Div><FaTwitter className='color01'/></Div>
              <Div><FaFacebookF className='color01'/></Div>
              <Div><FaTelegram className='color01'/></Div>
              <Div><FaGithub className='color01'/></Div>
              <Div><BsCurrencyBitcoin className='color01'/></Div>
              <Div><FaMedium className='color01'/></Div>
            </Stack>
            <SocialTitle >Copyright © 2021, Jackinu.io. All rights reserved.</SocialTitle>
        </Box>
      </Box>

    </>
  );
}


export default Footer;