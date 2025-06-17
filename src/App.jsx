import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation/Navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Home from './pages/Home'


export default function App() {
  return (
    <div>
     
      <Header/> 
     
     <Navigation/>
      <Footer/>
       <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
      
    
      
    </div>
  )
}