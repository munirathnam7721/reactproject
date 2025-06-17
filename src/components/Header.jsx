import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import "../cssfiles/Header.css"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";




export default function Header() {
    const cartItems = useSelector((state) => state.cartItems.cart);
  const uniqueItemCount = cartItems.length;
  return (
    <div className='Nav-Container'>
        <div className='Nav-icon'>
            <h1><FaShoppingBag /></h1>
          <Link to="/"><button>MART</button></Link>  
        </div>
        <div className='Nav-button'>
          <Link to="/"> <button>Home</button> </Link>
          <Link to='/shop'>  <button>Shop</button></Link>
           <Link to="/cart"><button>Cart</button></Link> 
            <button><CgProfile /></button>
            <div className='Carticon'>
             <Link to="/cart">   <button><FaCartArrowDown /></button></Link>
                <span>{uniqueItemCount}</span>
            </div>
        </div>
      
</div>
)
}