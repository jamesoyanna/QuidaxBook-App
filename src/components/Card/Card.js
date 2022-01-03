import React, { useState, useEffect } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Rating from "./../Rating";
import { useCartCounter } from "../../contexts/CartContext";
import Backdrop from '../../components/Backdrop/Backdrop';
import CartPage from './../../pages/CartPage/CartPage';
import moment from "moment";
import TagList from './TagList';

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
      <section style={{ margin: "100px 50px" }}>
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
                  {book.tags.map((tag) => (
                    <TagList
                      key={tag.id}
                      tag={tag}
                      className="tag-list"
                    ></TagList>
                  ))}
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
                    <span className="price">${book.price}</span>
                  </span>
                  <span className="w-1 mr-1 ml-1 h-8 p-0 bg-gray-lighter"></span>
                  <span className="rating-section">
                    <span className="w-full flex-box flex-nowrap justify-between">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                    <span className="full flex-box flex-nowrap justify-between">
                      <span className="w-full text-black text-xs font-light mr-1">
                        {book.number_of_purchases}
                      </span>
                      <span className="w-full text-black text-xs font-light ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
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
          className="fas fa-shopping-cart add-to-cart"
        >
          Add to card
        </button>
      </section>

      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <CartPage show={sideToggle} click={() => setSideToggle(false)} />
    </>
  );
};

export default Card;
