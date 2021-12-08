import React, { useState } from "react";
import "./searchbox.css";
import search from "../../assets/svg/loupe.svg";
import "../NavBar/NavBar.css";
import { useParams, Redirect, Link } from "react-router-dom";
import CategoryPage from "../../pages/CategoryPage/CategoryPage";
import { useQuery, useLazyQuery, gql } from "@apollo/client";

const BOOK_SEARCH_QUERY = gql`
  query book($id: ID!) {
    book(id: $id) {
      id
      created_at
      updated_at
      title
      subtitle
      publisher
      release_date
      number_of_purchases
      likes
      rating
      price
      image_url
    }
  }
`;

const SearchBox = () => {
  // const { loading, error, data } = useQuery(BOOK_SEARCH_QUERY);
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { loading, error, data }] =
    useLazyQuery(BOOK_SEARCH_QUERY);

  if (loading)
    return (
      <div style={{ color: "lightgreen", fontSize: "14px" }}>Loading...</div>
    );
  if (error) return <div style={{ color: "red" }}>An Error occured</div>;
  console.log("My MTN data", data);

  // const handleFilter = (e) => {
  //   const searchItem = e.target.value;
  //   setItemSelected(searchItem);

  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //     const newFilter = books;
  //     console.log(newFilter);
  // }

  // const clearInput = () => {
  //   setFilteredData([]);
  // };

  return (
    <>
      <div className="nav-input-container">
        <input
          className="search-box input"
          type="text"
          placeholder="search books, genres, authors etc."
          onChange={(e) => setSearchFilter(e.target.value)}
          //onChange={handleFilter}
        />

        <button
          //onClick={handleSearch}
          style={{ cursor: "pointer" }}
          className="nav-btn"
          onClick={() =>
            executeSearch({
              variables: { id: searchFilter },
            })
          }
        >
          <img src={search} alt="search-button" />
        </button>

        {/* {filteredData.length === 0 ? (
          <button
            onClick={handleSearch}
            style={{ cursor: "pointer" }}
            className="nav-btn"
          >
            <img src={search} alt="search-button" />
          </button>
        ) : (
          <i id="clearBtn" onClick={clearInput} className="close">
            X
          </i>
        )} */}
      </div>

      {/* {data &&
        data.title.map((bk, index) => (
          <CategoryPage
            // to={`/product/${books}`}
            key={bk.id}
            book={bk}
            index={index}
            
          />
        ))} */}
    </>
  );
};

export default SearchBox;
