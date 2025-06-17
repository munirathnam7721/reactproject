import React from 'react'
import {Route, Routes}from "react-router-dom"
import Productdetails from "../pages/Productdetails"
import Home from '../pages/Home'
import Shoppage from '../pages/Shoppage'
import CartPage from '../pages/CartPage'


export default function Navigation() {
  return (
    <div>
      <Routes>
       
       <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Productdetails/>}/>
        <Route path='/shop'element={<Shoppage/>}/>
        <Route path='/cart'element={<CartPage/>}/>
      </Routes>
    </div>
  )
}