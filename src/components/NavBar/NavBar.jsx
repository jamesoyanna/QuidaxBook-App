import React from 'react';
import './NavBar.css';
import {Link } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';
import logo from '../../assets/image/book1.jpg';

import { useCartCounter } from "../../contexts/CartContext";

//import Cart from '../Cart/Cart';

const NavBar = () => {
  const {data, cartCounter} = useCartCounter();

     // Search
  const search = (term) => {
    
      
  };

 
    
    return (
      <>
      <div className="Nav header header-top">
        <Link to="/">
          <h4 style={{textAlign: 'left'}} className="header">Quidax <span>Books</span> </h4>
        </Link>
            <SearchBox books = {data} search={search}   />
        <p>Cart: {cartCounter}</p>
      
       {/* <img onClick={click} style={{height: "60px", width: "60px", cursor: "pointer"}} src={logo} alt="djfjfj" /> */}
       
      </div>
      </>
    );
}

export default NavBar;
