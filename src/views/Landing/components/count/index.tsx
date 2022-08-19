import React from 'react';
import { Typography, Stack } from '@mui/material';
import Countdown from "react-countdown";
import styled from 'styled-components';


const title = {
  fontWeight: 500,
  fontSize: '12px',
  color:'white',
};
const CountTitle = styled.span`
  color: white;
  font-size: 40px;
  font-weight: 500;
`

const UnderTitle = styled.span`
  color: #e5894c;
  font-size: 12px;

`

const Completionist = () => <Typography style={title}>Success!</Typography>;


const renderer = (props: any) => {
  const { days, hours, minutes, seconds } = props;
  if (props.completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
        <Stack direction='row' alignItems='center' spacing={2}>
          <Stack direction='column' spacing={1} alignItems='center'>
            <Stack direction='row' spacing={1} alignItems='center'>
              <CountTitle>{days}</CountTitle>
              <CountTitle>:</CountTitle>
            </Stack>
            <UnderTitle>DAYS</UnderTitle>
          </Stack>
          <Stack direction='column' spacing={1} alignItems='center'>
            <Stack direction='row' spacing={1} alignItems='center'>
              <CountTitle>{hours}</CountTitle>
              <CountTitle>:</CountTitle>
            </Stack>
            <UnderTitle>HOURS</UnderTitle>
          </Stack>
          <Stack direction='column' spacing={1} alignItems='center'>
            <Stack direction='row' spacing={1} alignItems='center'>
              <CountTitle>{minutes}</CountTitle>
              <CountTitle>:</CountTitle>
            </Stack>
            <UnderTitle>MINUTES</UnderTitle>
          </Stack>
          <Stack direction='column' spacing={1} alignItems='center'>
            <Stack direction='row' spacing={1} alignItems='center'>
              <CountTitle>{seconds}</CountTitle>
            </Stack>
            <UnderTitle>SECONDS</UnderTitle>
          </Stack>
        </Stack>
    );
  }
};

const Counter = () => {
  return(
    <Countdown zeroPadTime={2} date={Date.now() + 15000} renderer={renderer} />
  );
} 

export default Counter;
