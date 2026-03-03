import { createContext, useState } from 'react'
import Child1 from './Components/Child1';
import './App.css'

export const ThemeContext = createContext();


function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <ThemeContext.Provider value = {{theme, setTheme}}>
        <div id='container' style={{backgroundColor: theme==='light'?"beige":"black"}} >
          <Child1 />
        </div>
      </ThemeContext.Provider>

    </div>
  )
}

export default App
// export {ThemeContext};
