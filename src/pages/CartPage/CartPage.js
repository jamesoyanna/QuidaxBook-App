import "./cartpage.css";
//import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
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
        {cart?.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            incrementItemAmount={incrementItemAmount}
            decrementItemAmount={decrementItemAmount}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </>
  );
};
export default CartPage;
