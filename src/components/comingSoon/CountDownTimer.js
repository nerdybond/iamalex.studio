"use client"

import React from 'react';
import { useCountDown } from './useCountDown';
import DateTimeDisplay from './DateTimeDisplay';


const ExpiredNotice = () => {
  return (
<div className='expired-notice'>
  <span>For all enquiries, email me directly at: <a className="font-bold italic" href="mailto:somepeeps@somepeeps.studio">somepeeps@somepeeps.studio</a></span>
</div>
); };


const ShowCounter = ({days, hours, minutes, seconds}) => {
  return (
      <div className='show-counter'>
        <a
        className="flex flex-row text-center gap-4"
      >
        <DateTimeDisplay value={days} type={'days'} isDanger={days <= 1} />
        <div></div>
        <DateTimeDisplay value={hours} type={'hours'} isDanger={false} />
        <div></div>
        <DateTimeDisplay value={minutes} type={'minutes'} isDanger={false} />
        <div></div>
        <DateTimeDisplay value={seconds} type={'seconds'} isDanger={false} />
      </a>


      </div>


  );
};

const CountDownTimer = ({targetDate}) => {
  const [weeks, days, hours, minutes, seconds] = useCountDown(targetDate);

  if (weeks + days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice/> }
  else {
    return (
      <ShowCounter 
      weeks={weeks}
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}/>
    );
  }

};

export default CountDownTimer;