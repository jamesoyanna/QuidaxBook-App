import React from 'react';
import './cart.css';
import cart from "../../assets/image/new-book.png";
import { useCartCounter } from "../../contexts/CartContext";

const Cart = () => {
   const {  cartCounter } = useCartCounter();
    return (
      <>
        <img className="image" src={cart} alt="cart" />
        <p className="count">{cartCounter}</p>
      </>
    );
}

export default Cart;
