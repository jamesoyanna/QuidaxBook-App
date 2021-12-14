import React from 'react';
import './NavBar.css';
import {Link } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';
import Logo from '../../assets/image/logo.png';
import Img from '../../assets/image/cart.png';

import { useCartCounter } from "../../contexts/CartContext";

//import Cart from '../Cart/Cart';

const NavBar = () => {
  const { data, cartCounter} = useCartCounter();

     // Search
  const search = (term) => {
    
      
  };

 
    
    return (
      <>
       <div className="navigation fix-nav">
         <Link to='/'>
        <img className="logo" src={Logo} alt="quidax book" />
        </Link>
        <div className="toggle"></div>
        <ul class="menu">
          <li>Home</li>
        </ul>
        <div className="right-menu">
          <div className="wrap"></div>
          <a href="cart" className="cart">
            <em className="fas fa-shopping-cart">
              <span className="num-cart-product">0</span>
            </em>
          </a>
        </div>
      </div>

        
      </>
    );
}

export default NavBar;
