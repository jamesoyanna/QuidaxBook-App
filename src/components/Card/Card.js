import React  from "react";
import "./card.css";
import cartImg from "../../assets/image/cart.png";
import { Link } from "react-router-dom";
import Rating from "./../Rating";

const  Card = ({ book, addToCart}) =>{

   const submitProductToCart = () => {
     // When clicked, add product to cart and open cart drawer
     addToCart(book);
   };

  return (
    <>
      <div className="Card">
        <Link to={`/product/${book.id}`} className="Card">
          <h3>{book.title}</h3>
          <p className="subtitle">{book.subtitle}</p>

          <h4>{book.publisher}</h4>

          <div className="card-start">
            <Rating rating={book.rating} />
          </div>
          <img
            style={{ height: "200px", width: "140px" }}
            src={book.image_url}
            alt="book"
          />

          <div className="card-pric">
            <h4> $ {book.price}</h4>
            <h3>{book.number_of_purchases}</h3>

            <span>
              {book.available_copies > 0 ? "In Stock" : "Out of Stock"}
            </span>

            <h5>{book.release_date}</h5>
          </div>
        </Link>
        <button onClick={submitProductToCart}>
          <img className="shopping-cart" src={cartImg} alt="shopping cart" />
          <p className="cart-text">Add to cart</p>
        </button>
      </div>
    </>
  );
};

export default Card;
