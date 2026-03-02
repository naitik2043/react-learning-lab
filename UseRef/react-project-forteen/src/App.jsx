import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  // // useState → state update hone par component re-render hota hai

  // // useRef → ek mutable object deta hai jiska .current value
  // // component ke re-render hone par bhi persist karti hai.
  // // .current ko update karne par re-render trigger nahi hota.
  // let val = useRef(0);

  // function handleIncrement() {
  //   // value persist karti hai, reset nahi hoti
  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);

  //   // state update → re-render trigger
  //   setCount(count + 1);
  // }

  // // dependency array nahi diya → ye effect har render ke baad chalega
  // useEffect(() => {
  //   console.log("Main firse render ho gaya hu")
  // });


  // let btnRef = useRef();

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "red";
  // }

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    // agar timer already chal raha h to new interval mt banao
    if(timerRef.current !== null) return;

    
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
    
  }


  // cleanup → component unmount hone par interval band ho jaye
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);




  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /> <br />

      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />

      <button onClick={resetTimer}>
        Reset
      </button>
      <br /> <br />







      {/* <button 
        ref={btnRef}
        onClick={handleIncrement}>
        Increment
      </button>

      <br /> 

      <button onClick={changeColor}>
        Change Color of 1st Button
      </button>

      <br />

      <div>
        Count: {count}
      </div> */}
    </div>
  );
}

export default App;