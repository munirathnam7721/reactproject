// import React from 'react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { globalContext } from '../context/MyContext'
import "../cssfiles/Productdetailsbanner.css"
import {useDispatch} from "react-redux"
import { addtoCart } from '../Redux/ProductSlice'
import { toast } from 'react-toastify'; 
export default function Productdetailsbanner() {
    const { id } = useParams()
    const { discountData, data } = useContext(globalContext)
    const dispatch=useDispatch();
    const [quantity, setQuantity] = useState(1) 

    const [productInfo, setProductInfo] = useState(null)

    useEffect(() => {
        const foundProduct =
            discountData.find((product) => product.id === id) ||
            data.find((product) => product.id === id)
        setProductInfo(foundProduct)
    }, [id])
    if (!productInfo) return <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}>Product Details Not Found</p>;
      const handleAddToCart = () => {
    const productWithQty = {
      ...productInfo,
      quantity: parseInt(quantity) || 1, 
    };
    dispatch(addtoCart(productWithQty));
    toast.success(Added ${quantity} item(s) to cart);
  }

    return (
        <div className='Main-productbanner'>
            <div className='Bannertitle'>
                <h1>{productInfo.productName}</h1>
            </div>
            <div className='Banner-info'>
                <div className='product-image'>
                    <img src={productInfo.imgUrl} alt={productInfo.productName} />
                </div>
                <div className='productname'>
                    <h2>{productInfo.productName}</h2>
                    <div className='Product-rating'>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p>{productInfo.avgRating} ratings</p>
                    </div>
                    <div className='product-priceandcategory'>
                        <p className='productcategory-price'>${productInfo.price}</p>
                        <p className='productcategory'>category:{productInfo.category}</p>
                    </div>
                    <p>{productInfo.shortDesc}</p>
                    <input
                     type="number"
                     min="1"
                     value={quantity}
                     className='productdetails-input'
                     onChange={(e) => setQuantity(Number(e.target.value))}/>
                    <br />
                    <button className='productdetailsbutton' onClick={handleAddToCart} >Add to cart</button>
                </div>
            </div>

        </div>
    )
}