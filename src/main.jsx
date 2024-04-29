import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home.jsx'
import IndukProps from './Pages/induk-props.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App /> */}
    {/*<Home />*/}
    {/*<IndukProps/>*/}
    {/*<LandingPage/>*/}

    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </React.StrictMode>,
)
