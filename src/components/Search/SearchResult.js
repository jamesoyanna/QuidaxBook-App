import React from 'react';
//import { Link } from "react-router-dom";
const SearchResult = ({ book }) => {
  return (
    <>
      {/* <Link style={{ textDecoration: "none" }} to={`/product/${book.id}`}> */}
        <h5>{book.title}</h5>
        <img src={book.image_url} alt="books" />
      {/* </Link> */}
    </>
  );
};

export default SearchResult;
