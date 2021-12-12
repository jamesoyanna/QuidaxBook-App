import React from 'react';
import './NavBar.css';
import {Link } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';
import {useQuery, gql } from "@apollo/client";
import logo from '../../assets/image/book1.jpg';

import Cart from '../Cart/Cart';
const BOOK_QUERY = gql`
{
  books{
    id
    title
    subtitle
    publisher
    release_date
    number_of_purchases
    rating
    price
    image_url
  }
}
`
const NavBar = ({click}) => {
   const {loading, error, data } = useQuery(BOOK_QUERY);


     // Search
  const search = (term) => {
    
       console.log("My result was perfect", data);
  };

 
    
    return (
      <div className="Nav header header-top">
        <Link to="/">
          <h4 style={{textAlign: 'left'}} className="header">Quidax <span>Books</span> </h4>
        </Link>
            <SearchBox books = {data} search={search}   />
        
       <Cart  />
       <img onClick={click} style={{height: "60px", width: "60px", cursor: "pointer"}} src={logo} alt="djfjfj" />
      </div>
    );
}

export default NavBar;
