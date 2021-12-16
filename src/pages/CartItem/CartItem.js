import React from "react";
import "./cartItem.css";
import minus from "../../assets/image/minus.svg";
import plus from "../../assets/image/plus.svg";

import { useCartCounter } from "../../contexts/CartContext";

export default function CartItem({
  item,
  loading,
  incrementItemAmount,
  decrementItemAmount,
  removeFromCart,
  ...rest
}) {
  
    const { decreaseCartCounter, increaseCartCounter, getSubTotal } =
      useCartCounter();

    const incrementCart = () => {
      increaseCartCounter();
      incrementItemAmount(item);
    }

      const decrementCart = () => {
        decreaseCartCounter()
        decrementItemAmount(item)
      };

  const { image_url, title, price, amount, publisher } = item; // De-structure cart-item details

  return (
    <>
      <div className="cart-container">
        <div className="item">
          <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
          </div>
          <div className="image">
            <img
              style={{ height: "100px", width: "70px" }}
              src={image_url}
              alt=""
            />
          </div>
          <div className="description">
            <h4 style={{ whiteSpace: "nowrap" }}>{title}</h4>
            <span>{publisher}</span>
            <span
              style={{ color: "#000" }}
              onClick={() => removeFromCart(item)}
            >
              Remove
            </span>
          </div>
          <div className="quantity">
            <div
              style={{ marginLeft: "60px", marginBottom: "10px" }}
              className=""
            >
              ${price}
            </div>
            <button
              onClick={decrementCart}
              className="minus-btn"
              type="button"
              name="button"
            >
              <img src={minus} alt="" />
            </button>
            <span className="amount">{amount} </span>
            <button
              onClick={incrementCart}
              className="plus-btn"
              type="button"
              name="button"
            >
              <img src={plus} alt="" />
            </button>
            <div
              style={{
                marginLeft: "60px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
              className=""
            >
              ${getSubTotal()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
