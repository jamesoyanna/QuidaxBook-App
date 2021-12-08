import React from "react";
import "./Card.css";
import cart from "../../assets/image/cart.png";
import star from "./../../assets/svg/star.svg";
import { Link } from "react-router-dom";
import Rating from "./../Rating";

const Card = (props) => {
  return (
    <>
      <div className="Card">
        <Link to={`/product/${props.book.id}`} className="Card">
          <h3>{props.book.title}</h3>
          <p className="subtitle">{props.book.subtitle}</p>

          <h4>{props.book.publisher}</h4>
          {/* <h4>{props.book.rating}</h4> */}
          <div className="card-start">
            <Rating rating={props.book.rating} />
            {/* <img src={star[props.book.rating]} alt="star-rating" /> */}
          </div>
          <img
            style={{ height: "200px", width: "140px" }}
            src={props.book.image_url}
            alt="book"
          />

          <div className="card-pric">
            <h4> $ {props.book.price}</h4>
            <h3>{props.book.number_of_purchases}</h3>
            <h5>{props.book.release_date}</h5>
          </div>
        </Link>
        <button onClick={() => alert("You click me")}>
          <img className="shopping-cart" src={cart} alt="shopping cart" />
          <p className="cart-text">Add to cart</p>
        </button>
      </div>
    </>
  );
};

export default Card;
