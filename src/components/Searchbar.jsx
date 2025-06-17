import React, { useContext, useState } from 'react';
import "../cssfiles/Searchbar.css";
import { globalContext } from '../context/MyContext';
import { FaBaby, FaPlus } from 'react-icons/fa';
import { FaDribbble, FaSearch, } from "react-icons/fa";
import {useDispatch} from "react-redux"
import { addtoCart } from '../Redux/ProductSlice'
import { toast } from 'react-toastify'; 

import { Link } from "react-router-dom"

export default function Searchbar() {
  const { data } = useContext(globalContext);
  const dispatch=useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("Filter By Category");
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState([])
  const filteredProducts = data.filter((product) => {
    const matchesCategory =
      selectedCategory === "Filter By Category" || product.category === selectedCategory;
    const matchesSearch =
      product.productName.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  })

  const filtered = data;
  const uniquefilter = [...new Set(filtered.map((p) => p.category))];

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>

      <div className='Searchbar-container'>
        {/* Dropdown using select-option */}
        <div className="dropdown">
          <select className="dropbtn" value={selectedCategory} onChange={handleChange} >
            <option value="Filter By Category">Filter By Category </option>
            {uniquefilter.map((item) => (
              <option key={item} value={item}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Search input */}
        <div className='Searchbar-search'>
          <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
          <span className='search-icon'>
            <FaSearch />
          </span>
        </div>
      </div>
      <div className="Bestsales-section">
        {filteredProducts.length === 0 && search ? (
          <h1 className="Bestsales-title">Product Not found</h1>) : (
          <div className="Bestsales-grid">
            {filteredProducts.map((item) => (
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
              <button className="add-btn" onClick={()=>{dispatch(addtoCart({ ...item, quantity: 1 }));toast.success("Your Product is Added to Cart successfully")}} ><FaPlus /></button>
                </div>
              </div>
            ))}
          </div>
        )}


      </div>

    </div>
  );


}