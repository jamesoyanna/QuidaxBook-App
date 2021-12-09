import React from 'react';
import './cart.css';
import cart from "../../assets/image/new-book.png"
const Cart = () => {
    return (
      <>
        
          <img className='image' src={cart} alt="cart" />
          <p className='count'>0</p>
          
        
      </>
    );
}

export default Cart;
