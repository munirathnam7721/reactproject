import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { globalContext } from '../context/MyContext'
import { useEffect } from 'react'
import "../cssfiles/DescriptionToggel.css"

export default function DescriptionToggel() {
    const { id } = useParams()
    const { discountData, data } = useContext(globalContext)

    const [productInfo, setProductInfo] = useState(null)
    const [active, setActive] = useState("description")

    useEffect(() => {
        const foundProduct =
            discountData.find((product) => product.id === id) ||
            data.find((product) => product.id === id)
        setProductInfo(foundProduct)
    }, [id])
    if (!productInfo) return <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "30px" }}></p>;

    return (
        <div className='main-togglesection'>
            <div className='togglesection-buttons'>
                <button onClick={() => { setActive("description") }} className='toggle-descbutton'>Description</button>
                <button onClick={() => { setActive("reviews") }} className='toggle-reviewsbtn'>Reviews({productInfo && productInfo.reviews ? productInfo.reviews.length : 0})
                </button>
            </div>
            {active === "description" &&
                <div className='toggle-description'>
                    <p>{productInfo.description}</p>
                </div>
            }
            {active === "reviews" && (
                <div className='reviews'>
                    {productInfo.reviews.map((review, index) => {
                        return (
                            <div key={index} className='toggle-reviewsandrating'>
                                <h5 className='personname'>Muni</h5>
                                <p className='toggle-rating'>{review.rating} (rating)</p>
                                <p className='toggle-review'>{review.text}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    )
}