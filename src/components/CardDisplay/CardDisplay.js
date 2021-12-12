import React from "react";
import Card from "./../Card/Card";
import "./cardDisplay.css";
const CardDisplay = ({ books, addToCart}) => {
  return (
    <div className="card-display">
      <h4>All Books</h4>
      <div className="card-display-container">
        {books.map((book) => {
          return (
            <Card
              key={book.id}
              book={book}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardDisplay;
