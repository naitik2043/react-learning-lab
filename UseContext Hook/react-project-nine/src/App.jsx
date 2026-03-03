import { createContext, useState } from 'react'
import './App.css'
import Child1 from './Components/Child1'

//step-1:-  Creating a context
const UserContext = createContext();
//step-2:-  Wrapping all the children inside a provider
//step-3:- pass value
//step-4:- consumer k andar jaake consume karlo

function App() {
  const [user, setUser] = useState({name:"Naitik Gupta"});

  return (
    <div>

      <UserContext.Provider value={user}>
        <Child1 />   {/* all the children are inside the provider */}
      </UserContext.Provider>


    </div>
  )
}

export default App
export {UserContext}
