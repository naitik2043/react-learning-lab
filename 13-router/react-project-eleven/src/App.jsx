import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import ParamComp from './Components/ParamComp'
import Courses from './Components/Courses'
import MockTest from './Components/MockTest'
import Reports from './Components/Reports'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: 
      <div>
        <Navbar />
        <Home />
      </div> 
    },

    {
      path: "/about",
      element: 
      <div>
        <Navbar />
        <About />
      </div>
    },

    // Nestested Routes
    {
      path: "/dashboard",
      element: 
      <div>
        <Navbar />
        <Dashboard />
        
      </div>,
      children: [
        {
          path: "course",
          element: <Courses />
        },

        {
          path: "mock-test",
          element: <MockTest />
        },

        {
          path: "reports",
          element: <Reports />
        }
      ]
    },

    {
      path: "/student/:id",
      element: 
      <div>
        <Navbar />
        <ParamComp />
      </div>
    },

    {
      path: "*",
      element: 
      <div>
        <Navbar />
        <h1>404 Not Found</h1>
      </div>
    }
  ]
);




function App() {

  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
