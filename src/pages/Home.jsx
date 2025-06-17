import React from 'react'
import Carosol from "../pages/Carosol"
import Servicedata from "../pages/Servicedata"
import Bigdiscount from "../pages/Bigdiscount"
import NewArrivals from '../pages/Newarrivals'
import Bestsales from "../pages/Bestsales"



export default function Home() {
  return (
    <div>
   
      <Carosol/>
      <Servicedata/>
      <Bigdiscount/>
      <NewArrivals/>
      <Bestsales/>

    </div>
  )
}