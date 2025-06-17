import React, { useContext } from 'react';
import { globalContext } from '../context/MyContext';
import { FaPlus } from 'react-icons/fa';
import "../cssfiles/Bestsales.css"
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addtoCart } from '../Redux/ProductSlice'
import { toast } from 'react-toastify';

export default function Bestsales() {
  const { data } = useContext(globalContext);
  const dispatch=useDispatch();
  const filtered=data.filter(item=>item.category=== "sofa" )
  return ( 
    <div className="Bestsales-section">
      <h1 className="Bestsales-title">Best Sales</h1>
      <div className="Bestsales-grid">
        {filtered.map((item) => (
          <div className="Bestsales-card" key={item.id}>
             <Link to={`/${item.id}`}>
            <img src={item.imgUrl} alt={item.productName} className="Bestsales-image" />
             </Link>
            <div className='Bestsales-details'>
            <h2>{item.productName.split(' ').slice(0, 3).join(' ')} <br />{item.productName.split(' ').slice(3).join(' ')}</h2>
            <span>⭐⭐⭐⭐⭐</span>
            </div>
            <br />
            <div className="Bestsales-bottom">
              <span>${item.price}</span>
              {/* <button className="add-btn" onClick={()=>{dispatch(addtoCart(item));toast.success("Your cart is added successfully")}} ><FaPlus /></button> */}
      <button
       className="add-btn"
         onClick={() => {
         dispatch(addtoCart({ ...item, quantity: 1 }));
          toast.success("Your cart is added successfully");
           }}> <FaPlus /></button>
             
            </div>
          </div>
        ))}
      </div>
 </div>
);
}