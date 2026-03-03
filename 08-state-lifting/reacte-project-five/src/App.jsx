import './App.css'
import Card from './component/Card'
import { useState } from 'react';

function App() {
  // create state
  // manage state 
  // change state 
  // sabhi child me state ko sync karwadunga

  const[name, setName] = useState("Naitik Gupta");


  return (
    <div>
      <Card title="My Card-1" name={name} setName={setName} />
      <Card title="My Card-2" name={name} setName={setName} />
      <p>I am inside Parent Component and Value of name is: {name} </p>
    </div>
  )
}

export default App
