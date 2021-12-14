import React, {useState}  from "react";
import "./card.css";
import cartImg from "../../assets/image/b2.jpg";
import { Link } from "react-router-dom";
import Rating from "./../Rating";



import { useCartCounter } from "../../contexts/CartContext";

import Backdrop from '../../components/Backdrop/Backdrop';
import CartPage from './../../pages/CartPage/CartPage';


const Card = ({ book }) => {
   const [sideToggle, setSideToggle] = useState(false);

  const { addToCart } = useCartCounter();

  const submitProductToCart = () => {
    // When clicked, add product to cart and open cart drawer
    addToCart(book);
     setSideToggle(true);
  };

  return (
    <>
      {/* books display here  */}

      <Link to={`/product/${book.id}`}>
        <div className="product-box">
          <div className="product-img">
            <a href="cart" className="add-cart"></a>
            <img alt="" src={book.image_url} />
          </div>
          <div className="product-details">
            <span className="p-name">{book.title}</span>
            {/* <p className="subtitle">{book.subtitle}</p> */}
            <h4>{book.publisher}</h4>
            <span className="p-price">${book.price}</span>
            <em className="fas fa-shopping-cart"></em>
          </div>
        </div>
      </Link>

      

      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <CartPage show={sideToggle} click={() => setSideToggle(false)} />
    </>
  );
};

export default Card;
