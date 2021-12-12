import React, { useState } from "react";
import "./searchbox.css";
import search from "../../assets/svg/loupe.svg";
import "../NavBar/NavBar.css";
// import { useParams, Redirect, Link } from "react-router-dom";
// import CategoryPage from "../../pages/CategoryPage/CategoryPage";
// import { useQuery, useLazyQuery, gql } from "@apollo/client";

// const BOOK_SEARCH_QUERY = gql`
//   query book($id: ID!) {
//     book(id: $id) {
//       id
//       created_at
//       updated_at
//       title
//       subtitle
//       publisher
//       release_date
//       number_of_purchases
//       likes
//       rating
//       price
//       image_url
//     }
//   }
// `;



const SearchBox = props => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handling imput change
  const onInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    //  if (!value.length) {
    //    props.search(value);
    //  }
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm("");
    //props.search(searchTerm);
    const result = props.search(searchTerm);
    
  };

  return (
    <>
      <div className="nav-input-container">
        <input
          className="search-box input"
          type="text"
          placeholder="search books, genres, authors etc."
          onChange={onInputChange}
          value={searchTerm}
        />

        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          style={{ cursor: "pointer" }}
          className="nav-btn"
        >
          <img src={search} alt="search-icon" />
        </button>
      </div>
    </>
  );
};

export default SearchBox;
