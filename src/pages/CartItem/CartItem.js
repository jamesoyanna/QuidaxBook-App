import React from "react";
import "./cartItem.css";

import { useCartCounter } from "../../contexts/CartContext";

export default function CartItem({
  item,
  loading,
  incrementItemAmount,
  decrementItemAmount,
  removeFromCart,
  ...rest
}) {
  
    const { decreaseCartCounter, increaseCartCounter } = useCartCounter();

    const incrementCart = () => {
      increaseCartCounter();
      incrementItemAmount(item);
    }

      const decrementCart = () => {
        decreaseCartCounter()
        decrementItemAmount(item)
      };

  const { image_url, title, price, amount, total } = item; // De-structure cart-item details

  return (
    <>
      <div className="CartContainer">
        <div className="Cart-Items">
          <div className="image-box">
            <img src={image_url} style={{ height: "100px" }} alt="cart" />
          </div>
          <div className="about">
            <h5 className="title">{title}</h5>
            <h3 className="subtitle">James Oyanna</h3>
            <button
              onClick={() => removeFromCart(item)}
              className="remove about"
            >
              Remove
            </button>
          </div>

          <div className="counter">
            {/* Increase number of chosen cart product */}
            <div onClick={incrementCart} className="btn">
              +
            </div>
            <div className="count">{amount}</div>
            {/* Decrease number of chosen cart product */}
            <div onClick={decrementCart} className="btn">
              -
            </div>
          </div>
          <div>{total}</div>
          <div className="prices">
            <div className="amount">${price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
