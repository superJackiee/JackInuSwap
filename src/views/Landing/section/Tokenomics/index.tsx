import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import {styled} from '@mui/material/styles';
import Fade from 'react-reveal/Fade';
import styles from './tokenomics.module.css';
import Counter from '../../components/count';
import PieChart from '../../components/chart';

const Title = styled('div')({
  fontSize:'1em',
  fontWeight: 600,
  textAlign: 'center',
  margin: '20px 0px'
})


const Buy = styled(Button)({
  background: '#e5894c',
  padding:'7px 20px',
  borderRadius: '30px',
  color: 'white',
  marginTop:'30px'
})

const ListTitle = styled('span')({
  color: '#8284a5',
  fontSize: '13px'
})

const Tokenomics = () => {
  return(
    <>
      <Box className={styles.token_container}>
        <Box className={styles.token_main}>
            <Fade bottom style={{zIndex:'1000 !important'}}>
              <Box sx={{position:'relative', textAlign:'center'}}>
                <Typography className={styles.token}>TOKEN</Typography>
                <Typography className={styles.tokenomics}>TOKENOMICS</Typography>
              </Box>
            </Fade>
            
            <Title sx={{color:'#e5894c', mt:'80px'}}>Total jack supply –  10,000,000,000 (10billion)</Title>
            <Title sx={{color:'#e5894c'}}>Presale: 10%  (Vested)</Title>
            <Title sx={{color:'#e5894c'}}>Liquidity –  20% (locked)</Title>
            <Title sx={{color:'#e5894c'}}>P2E Gaming + LP Rewards : %30 (locked)</Title>
            <Title sx={{color:'#e5894c'}}>Development – 25% (locked)</Title>
            <Title sx={{color:'#e5894c'}}>Marketing – 7%</Title>
            <Title sx={{color:'#e5894c'}}>Team – 8% (locked)</Title>

            <Typography sx={{fontSize:'1.6em', color:'white',textAlign:'center', fontWeight:'700', mt:4}}>buy/sell Tax</Typography>
            <Title sx={{color:'white'}}> 3% reward to holders</Title>
            <Title sx={{color:'white'}}>2% add to Liquidity</Title>
            <Title sx={{color:'white'}}>1% marketing</Title>
          </Box>
          

          <div className={styles.circle_rect}>
            <div className={styles.circle_draw1} />
            <div className={styles.circle_draw2} />
            <div className={styles.circle_draw3} />
            <div className={styles.circle_draw4} />
          </div>

          <div className={styles.generaition}>
            <Stack className={styles.counter} direction='column' justifyContent='center' alignItems='center'>
              <Counter/>
              <div className={styles.line}/>
              <Buy>BUY JACKINU</Buy>
            </Stack>
            

            <div className={styles.list_box}>
              <ul  className={styles.list_left}>
                <Stack  direction='column' spacing={2} sx={{mt: 5}}  >
                  <li>Token Name</li>
                  <ListTitle>JACKINU</ListTitle>
                </Stack>
                <Stack direction='column' spacing={2} sx={{mt: 7}}>
                  <li>Emission Rate</li>
                  <ListTitle>No new tokens will be created</ListTitle>
                </Stack>
              </ul>
              <ul >
                <Stack direction='column' spacing={2}>
                  <li>Token Network</li>
                  <ListTitle>Binance Smart Chain</ListTitle>
                </Stack>
                <Stack direction='column' spacing={2} sx={{mt: 7}}>
                  <li>Total Supply</li>
                  <ListTitle>10 Bilion</ListTitle>
                </Stack>
              </ul>
            </div>

            
            <div className="circle-animation">
              <div className="circle-animation-l1 ca">
                  <span className="circle-animation-l1-d1 ca-dot ca-color-1" />
                  <span className="circle-animation-l1-d2 ca-dot ca-color-2" />
                  <span className="circle-animation-l1-d3 ca-dot ca-color-3" />
                  <span className="circle-animation-l1-d4 ca-dot ca-color-1" />
                  <span className="circle-animation-l1-d5 ca-dot ca-color-2" />
                  <span className="circle-animation-l1-d6 ca-dot ca-color-3" />
              </div>
              <div className="circle-animation-l2 ca">
                  <span className="circle-animation-l2-d1 ca-dot ca-color-1" />
                  <span className="circle-animation-l2-d2 ca-dot ca-color-3" />
                  <span className="circle-animation-l2-d3 ca-dot ca-color-2" />
                  <span className="circle-animation-l2-d4 ca-dot ca-color-1" />
                  <span className="circle-animation-l2-d5 ca-dot ca-color-2" />
              </div>
              <div className="circle-animation-l3 ca">
                  <span className="circle-animation-l3-d1 ca-dot ca-color-1" />
                  <span className="circle-animation-l3-d2 ca-dot ca-color-3" />
                  <span className="circle-animation-l3-d3 ca-dot ca-color-2" />
                  <span className="circle-animation-l3-d4 ca-dot ca-color-1" />
                  <span className="circle-animation-l3-d5 ca-dot ca-color-2" />
              </div>
            </div>
          </div>
          <PieChart/>
      </Box>
    </>
  );
}


export default  Tokenomics;