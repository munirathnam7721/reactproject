import React from 'react'
// import {SliderData} from "../DataofProject/Carosoldata"
import { SliderData } from "../DataofProject/Carosoldata"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../cssfiles/Carosol.css"

export default function Carosol() {
  const settings = {
    dots: true,
    infinite: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {SliderData.map((item) => (
          <div className='carousel-container' key={item.id}>
            <div className='carousel-info'>
              <h1>
                 {item.title.split(' ').slice(0, 5).join(' ')}<br />
                 {item.title.split(' ').slice(5).join(' ')}
              </h1>
              
              <p>{item.desc.split(' ').slice(0, 10).join(' ')}<br />
                   {item.desc.split(' ').slice(10).join(' ')}
              </p>
              
              <h5>Visit Collections</h5>
            </div>
            <div className='carousel-image'>
              <img src={item.cover} alt="carousel-slide" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}