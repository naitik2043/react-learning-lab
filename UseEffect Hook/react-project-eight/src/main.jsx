import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // StrictMode is a devlopment mode in this app is run two times but in production mode it will run only one time
  <StrictMode> 
    <App />
  </StrictMode>,
)
