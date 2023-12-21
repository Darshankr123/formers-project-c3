import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
// boot strap
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer position='top-right'>
    </ToastContainer>
      <App />
  </>,
)
