//import { useCallback, useState } from 'react';
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0);

  // // useCallback function ko memoize karta hai.
  // // Ye re-render ko nahi rokta, sirf function ka reference same rakhta hai.
  // const handleClick = useCallback(() => {
  //   // setCount(prev => prev + 1);
  //   setCount(count + 1);
  // }, [count]);

  return (
    // <div>
    //   <h1>Count : {count}</h1>

    //   <button onClick={handleClick}>
    //     Increment
    //   </button>

    //   <br /><br />

    //   <ChildComponent
    //     buttonName="Click me"
    //     handleClick={handleClick}
    //   />
    // </div>

    <div>
      <ExpensiveComponent />
    </div>
  )
}

export default App;