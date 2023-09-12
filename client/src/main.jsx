// import needed modules/components for react, react-dom, react-router-dom, and index.css
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

// import components
import App from './App.jsx'
import Creator from './pages/Creator.jsx'
import Home from './pages/Homepage.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'

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
      }
    ]
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
