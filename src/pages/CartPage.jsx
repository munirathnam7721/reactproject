import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../cssfiles/CartPage.css"
import { Link } from 'react-router-dom'
import { FaArrowRightFromBracket } from "react-icons/fa6"
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { removeFromCart, increaseQty, decreaseQty } from "../Redux/ProductSlice"

export default function CartPage() {
  const items = useSelector((state) => state.cartItems.cart)
  const dispatch = useDispatch()
  

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="cart-page">
      {items.length === 0 ? (
        <div className="empty-cart-message">
          <h2>Your Cart Is Empty</h2>
          
        <Link to="/" >  <button className='continueshopping'><FaLongArrowAltLeft /> Continue Shopping</button></Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item, index) => (
              <div className="cart-item-box" key={index}>
                <img src={item.imgUrl} alt={item.productName} className="product-img" />
                <div className="item-details">
                  <h3>{item.productName}</h3>
                  <p>${item.price.toFixed(2)} X {item.quantity}</p>
                  <h4>${(item.price * item.quantity).toFixed(2)}</h4>
                </div>
                <div className="qty-controls">
                  <button onClick={() => dispatch(increaseQty(item))}><FaPlus /></button>
                  <button onClick={() => dispatch(decreaseQty(item))}><FaMinus /></button>
                </div>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item))}>
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <hr />
            <p>Total Price :</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  )
}