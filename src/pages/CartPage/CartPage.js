import "./cartpage.css";
//import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
const CartPage = ({
  show,
  cart,
  incrementItemAmount,
  decrementItemAmount,
  removeFromCart,
}) => {
  const sideDrrawerClass = ["sidedrawer"];


  if (show) {
    sideDrrawerClass.push("show");
  }

  return (
    <>
      <div className={sideDrrawerClass.join(" ")}>
        <h5>YOUR CART</h5>
        <div>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              incrementItemAmount={incrementItemAmount}
              decrementItemAmount={decrementItemAmount}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="checkout">
            <div className="total">
              <div>
                <div className="Subtotal">Sub-Total</div>
                <div className="items">2 items</div>
              </div>
              <div className="total-amount">$6.18</div>
            </div>
              <button className="button">Checkout</button>
       
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
