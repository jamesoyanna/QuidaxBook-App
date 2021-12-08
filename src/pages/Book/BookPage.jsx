import React from 'react';
import "./bookPage.css";
import {useParams } from "react-router-dom";
import {useQuery, gql } from '@apollo/client';
import Rating from './../../components/Rating';

const BOOK_QUERY = gql`
 query book($id: ID!) {
 book(id: $id){
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
`
const BookPage = () => {
     const { id } = useParams();
    const { data, loading, error } = useQuery(BOOK_QUERY,{
        variables:{
            id
        }
    });

     if(loading) return <div>Loading...</div>
     if(error) return <div>An error occured</div>

    return (
        <div className="d-flex">
        
            <div className="text-container">
                    <img src={data.book.image_url} alt="books" />
              
                <div className="star-container">
                      <h2>{data.book.title}</h2>
                    <Rating rating={data.book.rating} />
                    <p>{data.book.number_of_purchases}</p>
                </div>
            </div>
            <div className="about-container">
                <h4>{data.book.title}</h4>
               <p> {data.book.subtitle}</p>
            </div>
            <div className="cart-container border">
                <p className="price">
                    <span>${data.book.price}</span>
                </p>
                <button className="buy-nw-btn" style={{ marginTop: "2rem" }}>Add to Cart</button>
            </div>
        </div>
    );
}

export default BookPage;
