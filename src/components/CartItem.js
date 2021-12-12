import React from "react";
export default function CartItem({
  item,
  loading,
  incrementItemAmount,
  decrementItemAmount,
  removeFromCart,
  ...rest
}) {

   const { id, image_url, title, price, amount } = item; // De-structure cart-item details

  // console.log("my title", title)
  return (
    <>
      <div className="container" {...rest}>
        <h4>{title}</h4>
        {/* Remove Item from cart */}
        <button onClick={() => removeFromCart(item)}>X</button>

        <div>
          <img
            style={{ height: "100px", width: "100px" }}
            src={image_url}
            alt="new"
          />
        </div>

        <div>
          <div>
            {/* // Reduce number of chosen cart product */}
            <button onClick={() => decrementItemAmount(item)}> - </button>
            <p>{amount}</p>

            {/* Increase number of chosen cart product */}
            <button onClick={() => incrementItemAmount(item)}>
              +
            </button>
          </div>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
