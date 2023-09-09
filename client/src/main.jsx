// import needed modules/components for react, react-dom, react-router-dom, and index.css
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

// import components
import App from './App.jsx'
import Creator from './Creator.jsx'
import Home from './Homepage.jsx'
import Login from './Login.jsx'
import Profile from './Profile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
