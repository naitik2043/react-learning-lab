import { useState } from 'react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )


  // if(isLoggedIn) {
  //   return (
  //   <LogoutBtn />
  //   )
  // } else {
  //   return (
  //   <LoginBtn />
  //   )
  // }


  return (
    <div>
      <h1>Welcome EveryOne to React Project Six</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>

      <div>
        {!isLoggedIn && <LoginBtn />}
      </div>
    </div>
  )

}

export default App
