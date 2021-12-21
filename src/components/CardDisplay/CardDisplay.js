import React from "react";
import Card from "./../Card/Card";
import "./cardDisplay.css";

const CardDisplay = ({ books }) => {
  return (
    <>
      <div className="books">
    
        <h4 className="header-text">
          All Books
        </h4>
        {books.map((book) => {
          return <Card key={book.id} book={book} />;
        })}
      </div>
    </>
  );
};

export default CardDisplay;
