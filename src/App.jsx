import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import { ToastContainer } from 'react-toastify'
import Date from './Date/Date'
function App() {
   const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [ 
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/date',
        element: <Date/>,
      },

    ]

  }


   ])

return (
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
)
}

export default App
