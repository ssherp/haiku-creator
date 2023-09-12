// import needed modules/components for react, react-dom, react-router-dom, and index.css
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

// import components
import App from './App.jsx'
import Creator from './pages/Creator.jsx'
import Homepage from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import Results from './pages/Results.jsx'

// create router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      }, {
        path: '/login',
        element: <Login />,
      }, {
        path: '/profile',
        element: <Profile />,
      }, {
        path: '/creator',
        element: <Creator />,
      }, {
        path: '/results',
        element: <Results />,
      }
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
