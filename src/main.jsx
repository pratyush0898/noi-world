import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Background from './Components/background/background.jsx'
import Hero from './Components/hero/hero.jsx'
import NavBar from './Components/nav-bar/navBar.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
