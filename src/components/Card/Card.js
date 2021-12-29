import React, { useState, useEffect } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Rating from "./../Rating";
import { useCartCounter } from "../../contexts/CartContext";

import Backdrop from '../../components/Backdrop/Backdrop';
import CartPage from './../../pages/CartPage/CartPage';
import moment from "moment";

const Card = ({ book }) => {
   const [sideToggle, setSideToggle] = useState(false);

   const [inStock, setInStock] = useState(true);

   useEffect(() => {
     if (!book.available_copies) {
       setInStock(false);
     }
   }, [book.available_copies]);

  

  const { addToCart } = useCartCounter();

  const addBookToCart = () => {
    // When clicked, add book to cart and open cart drawer
    addToCart(book);
     setSideToggle(true);
  };


  return (
    <>
      <section style={{ margin: "100px 70px" }} className="section mt-4">
        <div className="books-display">
          {/* first book start */}
          <Link style={{ textDecoration: "none" }} to={`/product/${book.id}`}>
            <div className="book">
              <div className="thumbnail">
                <img src={book.image_url} className="w-full h-full" alt="" />
              </div>
              <div className="book-detail">
                <span
                  className={
                    book.available_copies > 0
                      ? "w-full text-green text-sm md:text-sm font-light mb-1 md:mb-2"
                      : "outofstock"
                  }
                >
                  <span>
                    {book.available_copies > 0
                      ? `${book.available_copies} Copies Available`
                      : "Out of Stock"}
                  </span>
                </span>
                <span className="w-full text-black text-sm font-bold light mb-1 md:text-md">
                  {book.title}
                </span>
                <span className="w-full text-black text-xs md:text-xs font-light">
                  <h4>{book.publisher}</h4>
                </span>
                <span className="w-full text-black text-xs md:text-xs font-light">
                  -{moment.utc(book.release_date).format(" YYYY ")}
                </span>
                <span className="w-full text-black text-xs md:text-xs font-light mb-1">
                  moltivational
                </span>
                <span className="w-full flex-box flex-nowrap">
                  <span className="rating-section">
                    <span className="w-full text-black text-xs md:text-xs font-light mb-1">
                      <span className="md:font-bold">Rating: </span>
                      {book.rating}
                    </span>
                    <span className="w-full">
                      <Rating rating={book.rating} />
                    </span>
                    <span>${book.price}</span>
                  </span>
                  <span className="w-1 mr-1 ml-1 h-8 p-0 bg-gray-lighter"></span>
                  <span className="rating-section">
                    <span className="w-full flex-box flex-nowrap justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-3 h-3  mr-1 fill-current text-gray-light"
                      >
                        <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
                      </svg>
                    </span>
                    <span className="full flex-box flex-nowrap justify-between">
                      <span className="w-full text-black text-xs font-light mr-1">
                        44
                      </span>
                      <span className="w-full text-black text-xs font-light ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                        {book.likes}
                      </span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <button
          disabled={!inStock}
          onClick={addBookToCart}
          className=" fas fa-shopping-cart add-to-cart"
        >
          {" "}
          Add to card
        </button>
      </section>

      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <CartPage show={sideToggle} click={() => setSideToggle(false)} />
    </>
  );
};

export default Card;
