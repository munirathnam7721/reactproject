import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import "../cssfiles/Footer.css"



export default function Footer() {
  return (
    <div className='Footer-container'>
        <div className='Mart-section'>
            <div className='Mart'>
                <h1><FaShoppingBag />Mart</h1>
            </div>
            <div className='Mart-info'>
            <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br /> Cum beatae architecto <br /> Distinctio et suscipit,<br /> itaque repellendus nam atque  <br /> qui sit id doloremque non! </p>
            </div>
        </div>
        <div className='About-section'>
            <div className='About-us'>
                <h1>About us</h1>
            </div>
            <div className='About-info'>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            </div>     
        </div>
        <div className='Customer-section'>
            <div className='Customer-Care'>
                <h1>Customer Care</h1>
            </div>
            <div className='Customer-info'>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Track your Order</li>
                <li>Corporate & Bulk Purchasing</li>
                <li>Returns & Refunds</li>
            </div>
        </div>
        <div className='Contact-section'>
            <div className='Contact-us'>
                <h1>Contact Us</h1>
            </div>
            <div className='Contact-info'>
                <li>140- Kavanoor North,Nindra(M),Chittoor,PIN:517587,<br />AP,India</li>
                <li>Email: royalmunirathnam@gmail.com</li>
                <li>Phone: +91 7207149732</li>
            </div>         
        </div>      
    </div>  
  )
}