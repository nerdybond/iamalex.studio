"use client"

import { useEffect, useState } from "react";

// Callback function - React Hook to update every second, how many milliseconds between now and date. Uses useEffect with the setInterval API method to calculate spare time.
// The reason why useEffect is called, is because useState only does a calculation per render, and useEffect is a callback function that can be triggered multiple times.
const useCountDown = (targetDate) => {

const countDownDate = new Date(targetDate).getTime();

const [countDown, setCountDown] = useState(
countDownDate - new Date().getTime()
);

useEffect(() => {
  const interval = setInterval( () => {
      setCountDown(countDownDate - new Date().getTime());
  }, 1000 );

  return () => clearInterval(interval);
}, [countDownDate]
);

return getReturnValues(countDown);
};



  // Function that separates milliseconds into days, hours, minutes, and seconds

const getReturnValues = (countDown) => {
  const weeks = Math.floor(
    countDown / (1000 * 60 * 60 * 24 * 7)
    );
  
  const days = Math.floor(
    (countDown % (1000 * 60 * 60 * 24 * 7))/ (1000 * 60 * 60 * 24)
    );
  
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

  const minutes = Math.floor(
    (countDown % (1000 * 60 * 60)) / (1000 * 60)
    );
  
  const seconds = Math.floor(
    (countDown % (1000 * 60)) / 1000
    );

  return [weeks, days, hours, minutes, seconds];
};

export { useCountDown };