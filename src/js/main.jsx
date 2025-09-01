import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import "@fortawesome/fontawesome-free/css/all.min.css";

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let segundos= 0

setInterval (() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home segundos={segundos} />
  </React.StrictMode>,
)
segundos ++;
}, 1000)

