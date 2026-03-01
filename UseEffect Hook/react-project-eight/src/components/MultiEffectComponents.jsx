import React, { use } from 'react';
import { useEffect, useState } from 'react';

const MultiEffectComponents = () => {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("Count changed: ", count);
    }, [count]); // it will run on first render and every time the count changes

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Seconds updated: ", seconds);
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => {
            console.log("Time to stopf.");
            clearInterval(interval);
        };
    }, []); // it will run only on first render


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)} >Increment Count</button>
        <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default MultiEffectComponents;
