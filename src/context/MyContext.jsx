import React, { createContext, useContext, useEffect, useState } from 'react'
import {products,discoutProducts} from "../DataofProject/Data"
export const globalContext=createContext()
export default function MyContext({children}) {
    const[data,setData]=useState([])
    const [discountData, setDiscountData] = useState([]);

  const fetchData = () => {
    setData(products);
    setDiscountData(discoutProducts);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <globalContext.Provider value={{ data, discountData }}>
        {children}
    </globalContext.Provider>
  )
}