import React, {useState}  from "react";
import "./card.css";
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

      <div className="product-box">
        <Link to={`/product/${book.id}`}>
          <div className="product-img">
            <img alt="" src={book.image_url} />
          </div>
          <div className="product-details">
            <span className="p-name">{book.title}</span>
            {/* <p className="subtitle">{book.subtitle}</p> */}
            <h4>{book.publisher}</h4>
            <Rating rating={book.rating} />
            <span className="p-price">${book.price}</span>
            <span>
              {book.available_copies > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </Link>
        <button
          onClick={submitProductToCart}
          className=" fas fa-shopping-cart add-cart"
        ></button>
      </div>

      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <CartPage show={sideToggle} click={() => setSideToggle(false)} />
      
    </>
  );
};

export default Card;
