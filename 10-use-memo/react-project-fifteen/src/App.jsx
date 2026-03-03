import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);


  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<1000000000; i++) {}
    return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} >
        Increment
      </button>

      <input 
        type="number" 
        placeholder='Enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
      <div>
        Doble: {doubleValue}
      </div>
    </div>
  )
}

export default App
