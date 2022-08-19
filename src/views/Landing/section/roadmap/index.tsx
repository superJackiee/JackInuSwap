import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Fade from 'react-reveal/Fade';
import { FaCheck } from 'react-icons/fa'
import {styled} from '@mui/material/styles';
import styles from './roadmap.module.css';
import './timeline.css';


const circleText = [
  'Smart Contract Development',
  'Website Launch',
  'Fair launch on PancakeSwap',
  'Organic Marketing Campaigns',
  'CoinGecko Listing',
  'CoinMarketCap Listing',
  'Centralized Exchange Listing',
  'Development of Gaming/farming pool'
]



const RoadMap: React.FC = () => {
  return(
    <>
      <Box className={styles.roadmap_container}>
        <div className={styles.line} />
        <Box className={styles.roadmap_main}>
          <Fade bottom style={{zIndex:'1000 !important'}}>
            <Box sx={{position:'relative', textAlign:'center'}}>
              <Typography className={styles.roadmap}>ROADMAP</Typography>
              <Typography className={styles.ourroadmap}>OUR ROADMAP</Typography>
            </Box>
          </Fade>

          <main className='circle-bar'>
            <div className='circle-div'>
              <div className='circle-left'>
              {
                circleText.map((item: any, idx: any) =>(
                  <div className='circle-text right' key={item}>{idx % 2 === 1 ? item : ''}</div>
                ))
              }
              </div>
              <div className='circle-line'>
                <div className='inset-circle-bar'>
                {
                  circleText.map((item: any, idx: any) =>(
                    <div key={item} className={`circle ${idx > 1 ? 'circle-color' : 'black'}`}>
                      {idx < 2 && <FaCheck className='check-icon'/>}
                    </div>
                  ))
                }
                </div>
              </div>
              <div className='circle-right'>
              {
                circleText.map((item: any, idx: any) =>(
                  <div className='circle-text left' key={item}>
                    {(idx % 2 === 0) ? <div>{item}</div> : <div className='right-hide-text'>{item}</div> }
                  </div>
                ))
              }
              </div>
            </div>
          </main>
        </Box>
      </Box>
    </>
  );
}

export default RoadMap;