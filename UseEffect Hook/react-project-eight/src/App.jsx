import './App.css'
import { use, useEffect } from 'react'
import { useState } from 'react'
import LoggerComponents from './components/LoggerComponents'
import TimerComponents from './components/TimerComponents'
import DataFetcher from './components/DataFetcher'
import ResizeComponents from './components/REsizeComponents'
import MultiEffectComponents from './components/MultiEffectComponents'

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(1)


  //first -> side-effect function
  //second -> clean-up function
  //third -> comma separated dependency array


  // useEffect is a hook that allows you to perform side effects in function components. It takes two arguments: a function that contains the side effect, and an optional array of dependencies. The side effect function will run after the component renders, and the clean-up function will run before the component unmounts or before the side effect runs again if the dependencies change.

  // //variation:1
  // //run on every render

  // useEffect(() => {
  //   alert("I will run on every render!")
  // } )



  // //variation:2
  // //run only on first render

  // useEffect(() => {
  //   alert("I will run only on first render!");
  // }, [])
  


  // //variation:3
  // //run on first render and every time the count changes

  // useEffect(() => {
  //   alert("I will run on first render and every time the count changes!");
  // }, [count])



  // // variation:4
  // // multiple dependencies

  // useEffect(() => {
  //   alert("I will run every time when count/total is updated!")
  // }, [count, total])
  



  // // variation:5
  // // clean-up function

  // useEffect(() => {
  //   alert("Count is updated!")

  //   return () => {  // clean-up function 
  //     alert("count is unmounted form UI");
  //   }
  // }, [count])





  // function handleClick(){
  //   setCount(count + 1);
  // }

  // function handleClickTotal(){
  //   setTotal(total + 1);
  // }



  
  

  return (
    <div>

      {/* <button onClick={handleClick}>Update Count</button>
      <br />
      <h1>Count is : {count}</h1>

      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      <h1>Total is : {total}</h1> */}




      {/* <LoggerComponents />

      <TimerComponents /> */}

      {/* <DataFetcher /> */}


      {/* <ResizeComponents /> */}

      <MultiEffectComponents />






    </div>
  )
}

export default App
