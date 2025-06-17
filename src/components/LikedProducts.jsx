import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { globalContext } from '../context/MyContext'
import "../cssfiles/LikeProducts.css" 
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa';
import {useDispatch} from "react-redux"
import { addtoCart } from '../Redux/ProductSlice'
import { toast } from 'react-toastify';
export default function LikedProducts() {
    const { id } = useParams()
    const { discountData, data } = useContext(globalContext)
    const dispatch=useDispatch();
    

    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
        const foundProduct =
            discountData.find((product) => product.id === id) ||
            data.find((product) => product.id === id)
        setProductInfo(foundProduct)
    }, [id])
    if (!productInfo) return   <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}></p>;
    const concatnation=discountData.concat(data)
    const filtered=concatnation.filter((item)=>
    item.category===productInfo.category&&item.id!==productInfo.id);

  return (
    <div>
        <div className="LikedProducts-section">
            <h1 className="LikedProducts-title">You might also like</h1>

      <div className="LikedProducts-grid">
        {filtered.map((item) => (
          <div className="LikedProducts-card" key={item.id}>
            <Link to={`/${item.id}`}>
            <img src={item.imgUrl} alt={item.productName} className="LikedProducts-image" />
             </Link>
            <div className='LikedProducts-details'>
            <h2>{item.productName.split(' ').slice(0, 3).join(' ')} <br />{item.productName.split(' ').slice(3).join(' ')}</h2>
            <span>⭐⭐⭐⭐⭐</span>
            </div>
            <br />
            <div className="LikedProducts-bottom">
              <span>${item.price}</span>
              <button className="add-btn" onClick={()=>{dispatch(addtoCart({ ...item, quantity: 1 }));toast.success("Your cart is added successfully")}} ><FaPlus /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    </div>
  )
}