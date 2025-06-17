import React from 'react'
import "../cssfiles/Servicedata.css"


export default function Servicedata() {
    
 const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
];
   
  return (
    <div className='Main-servicedata'>
       {serviceData.map((item,index)=>{
        return(
            <div className='Servicedata' key={index}>
                <div className='single-servicecart'
                 style={{ backgroundColor: item.bg }}>
                 <button> {item.icon}</button>  
                   <h2>{item.title}</h2>               
                   <p>{item.subtitle}</p>
                </div>
            </div>
        )
       })}
    </div>
  )
}