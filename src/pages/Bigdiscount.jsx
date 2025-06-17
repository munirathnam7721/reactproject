import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa"
import "../cssfiles/Bigdiscount.css"
import { Link } from 'react-router-dom'
import { globalContext } from '../context/MyContext'
import {useDispatch} from "react-redux"
import { addtoCart } from '../Redux/ProductSlice'
import { toast } from 'react-toastify'; 

export default function Bigdiscount() {
  const { discountData } = useContext(globalContext)
  const dispatch=useDispatch();
 
  return ( 
    <div className="discount-section">
      <h1 className="section-title">Big Discount</h1>
      <div className="discount-grid">
        {discountData.map((product) => (
          <div className="discount-card" key={product.id}>
            <div className="discount-badge">{product.discount}% Off</div>
            <Link to={`/${product.id}`}>
              <img src={product.imgUrl} alt={product.productName} className="discount-image" />

            </Link>
            

            <div className='Discout-productdetails'>
              <h3 className="product-title">{product.productName}</h3>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <br />
            <div className="price-add">
              <span className="price">${product.price}</span>
              <button className="add-btn" onClick={()=>{dispatch(addtoCart({...product, quantity: 1 }));toast.success("Your cart is added successfully")}} ><FaPlus /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}