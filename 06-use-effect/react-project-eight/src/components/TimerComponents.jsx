import React from 'react';
import { useState, useEffect } from 'react';

const TimerComponents = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalid = setInterval(() => {
        console.log("setInterval executed.");
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    
      return () => {
        console.log("timer component unmounted, clearing interval  time to stop timer");
        clearInterval(intervalid);
      }
    }, []);
    // it will run only on first render


  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default TimerComponents;
