import React from "react";
import {useQuery } from "@apollo/client";
import { useState } from "react";


import { FILTERED_BOOKS } from "../../graphQL/queries";
import SearchResult from './SearchResult';


const SearchBox = () => {
  const [filter, setFilter] = useState("");

  const { data, loading, error } = useQuery(FILTERED_BOOKS, {
    limit: 10,
  });



     if (loading) return <div>Loading</div>;
     if (error) return <div>error</div>;

      //  console.log("Result from Quidax app", data);

  return (
    <>
      <div className="App">
        <h1>
          <a href="#book" aria-hidden="true" className="aal_anchor book">
            <svg
              aria-hidden="true"
              class="aal_svg"
              height="16"
              version="1.1"
              viewBox="0 0 16 16"
              width="16"
            >
              <path
                fill-rule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              ></path>
            </svg>
          </a>
          {/* Books */}
        </h1>

        <div>
          {/* <label>Search Now</label> */}{" "}
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <br />
        {!data || loading ? (
          <div>loading...</div>
        ) : (
          <div>
            {data.books.map((book) => (
              <SearchResult key={book.id} book={book} />
            ))}
          </div>
        )}
        <br />

        <button>Submit</button>
      </div>
    </>
  );
};

export default SearchBox;
