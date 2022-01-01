import "./cartpage.css";
//import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

import { useCartCounter } from "../../contexts/CartContext";

const CartPage = ({ show }) => {
  const {
    cart,
    incrementItemAmount,
    decrementItemAmount,
    removeFromCart,
    getSubTotal,
  } = useCartCounter();
  const sideBarClass = ["sidedrawer"];

  if (show) {
    sideBarClass.push("show");
  }
  return (
    <>
        {show && (
          <div className={sideBarClass.join(" ")}>
            <h5>YOUR CART</h5>
            <div>
              {cart?.map((item, i) => (
                <CartItem
                  key={i}
                  item={item}
                  incrementItemAmount={incrementItemAmount}
                  decrementItemAmount={decrementItemAmount}
                  removeFromCart={removeFromCart}
                />
              ))}
              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="Subtotal">Sub Total</div>
                  </div>
                  <div className="total-amount"> ${getSubTotal()}</div>
                </div>
                <button className="button">Checkout</button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
export default CartPage;
