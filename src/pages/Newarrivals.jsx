import React, { useContext } from 'react';
import { globalContext } from '../context/MyContext';
import { FaPlus } from 'react-icons/fa';
import '../cssfiles/NewArrivals.css';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addtoCart } from '../Redux/ProductSlice'
import { toast } from 'react-toastify';


export default function NewArrivals() {
  const { data } = useContext(globalContext);
  const dispatch=useDispatch();
  
  const filtered=data.filter(item=>item.category=== "mobile" || item.category==="wireless")
  return ( 
    <div className="new-arrivals-section">
      <h1 className="new-arrivals-title">New Arrivals</h1>
      <div className="new-arrivals-grid">
        {filtered.map((item) => (
          <div className="arrival-card" key={item.id}>
            <Link to={`/${item.id}`}>
            <img src={item.imgUrl} alt={item.productName} className="arrival-image" />
            </Link>
            <div className='arrival-details'>
            <h2>{item.productName}</h2>
            <span>⭐⭐⭐⭐⭐</span>
            </div>
            <br />
            <div className="arrival-bottom">
              <span>${item.price}</span>
              <button className="add-btn" onClick={()=>{dispatch(addtoCart({ ...item, quantity: 1 }));toast.success("Your cart is added successfully")}} ><FaPlus /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}