
import React from 'react';
import { Box, Typography, Stack } from '@mui/material'
import Fade from 'react-reveal/Fade';
import { FaTwitter, FaFacebookF, FaTelegram, FaGithub, FaMedium, FaTelegramPlane } from 'react-icons/fa';
import { BsCurrencyBitcoin } from 'react-icons/bs';
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
  font-size: 13px;
`
const SocialTitle = styled.div`
  color: white;
  font-size: 12px;
  text-align: center !important;
  width: 100% !important;
  margin-top: 40px;
  font-weight: 400 !important;
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
      <Box id='contact' className={styles.footer_container}>
        <Box className={styles.footer_main}>
            <Fade bottom style={{zIndex:'1000 !important'}}>
              <Box sx={{position:'relative', textAlign:'center'}}>
                <Typography className={styles.contact}>CONTACT</Typography>
                <Typography className={styles.contact_jack}>CONTACT JACKINU</Typography>
              </Box>
            </Fade> 
            <Typography className={styles.description}>Any question? Reach out to us and we’ll get back to you shortly.</Typography>
            
              <Stack sx={{mt: 5}} direction='row' className={styles.person_contact} spacing={{md: 5}}>
                <a href='info@jackinu.io' rel="noreferrer" target='_blank'>
                  <Stack  direction='row' spacing={2} alignItems='center'>
                    <CustTbMail>
                    <HiMail className='cust-mail'/>
                    </CustTbMail>
                    <Title>info@jackinu.io</Title>
                  </Stack>
                </a> 
                <a id='tel' href='https://t.me/jackinutoken' rel="noreferrer" target='_blank'>
                  <Stack className={styles.person_contract_child} direction='row' spacing={2} alignItems='center'>
                    <CustTbMail>
                      <FaTelegramPlane className='cust-mail'/>
                    </CustTbMail>
                    <Title>Join us on Telegram</Title>
                  </Stack> 
                </a>

            </Stack>
            

            <Stack sx={{mt: 23}} direction='row' spacing={1.5} alignItems='center' justifyContent='center'>
              <Div>
                <a href='https://jackinu.io/#' rel="noreferrer" target='_blank'>
                  <FaFacebookF className='color01'/>
                </a>
              </Div>
              <Div>
                <a href='https://twitter.com/jackinutoken' rel="noreferrer" target='_blank'>
                  <FaTwitter className='color01'/>
                </a>
              </Div>
              <Div>
                <a href='https://t.me/jackinutoken' rel="noreferrer" target='_blank'>
                  <FaTelegram className='color01'/>
                </a>
              </Div>
              <Div>
                <a href='https://jackinu.io/#' rel="noreferrer" target='_blank'>
                  <FaGithub className='color01'/>
                </a>
              </Div>
              <Div>
                <a href='https://jackinu.io/#' rel="noreferrer" target='_blank'>
                  <BsCurrencyBitcoin className='color01'/>
                </a>
              </Div>
              <Div>
                <a href='https://jackinu.io/#' rel="noreferrer" target='_blank'>
                  <FaMedium className='color01'/>
                </a>
              </Div>
            </Stack>
            <SocialTitle >Copyright © 2021, Jackinu.io. All rights reserved.</SocialTitle>
        </Box>
      </Box>

    </>
  );
}


export default Footer;