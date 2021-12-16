import "./cartpage.css";
//import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

import { useCartCounter } from "../../contexts/CartContext";

const CartPage = ({
  show,
}) => {
  
    const {
      cart,
      incrementItemAmount,
      decrementItemAmount,
      removeFromCart,
      getSubTotal,
    } = useCartCounter();
  const sideDrrawerClass = ["sidedrawer"];


  if (show) {
    sideDrrawerClass.push("show");
  }
  return (
    <>
      {show && (
        <div className={sideDrrawerClass.join(" ")}>
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
