import React from 'react';
import "./bookPage.css";
import {useParams } from "react-router-dom";
import {useQuery, gql } from '@apollo/client';
import Rating from './../../components/Rating';

import { useCartCounter } from "../../contexts/CartContext";

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

     const { addToCart } = useCartCounter();
     const { id } = useParams();
    const { data, loading, error } = useQuery(BOOK_QUERY,{
        variables:{
            id
        }
    });


  

     if(loading) return <div>Loading...</div>
     if(error) return <div>An error occured</div>

    return (

      <>
      
    <section className="book-page-header">
     
      <div className="section-center">
         <h2 className="header-text" style={{textAlign: 'left'}}> Single book Display</h2>
      </div>
    </section>     
       <section className="single-product section">
      <div className="section-center single-product-center">
        <img
          src={data.book.image_url}
          className="single-product-img img"
          alt=""
        />
        <article className="single-product-info">
          <div>
              <h2 className="single-product-title">{data.book.title}</h2>
            <h3 className="author">Author</h3>

            <div className="item-header">
              <div style={{columns: 8, paddingTop: "35px"}}>
            <h5 className="item-list">person</h5>
            <h5 className="item-list">love</h5>
            <h5 className="item-list"><Rating rating={data.book.rating} /></h5>
            <h5 className="item-list">Genre</h5>
             <h5 className="item-list">Tags <span>{data.book.tags}</span></h5>
            <h5 className="item-list">Publisher</h5>
            <h5 className="item-list">Released</h5>
             </div>
             </div>
                   <span className="single-product-price">${data.book.price}</span>
            <span className="single-product-desc">
               {data.book.subtitle}
            </span>
            <button   onClick={ addToCart} className="addToCartBtn">add to cart</button>
          </div>
        </article>
      </div>
    </section>


</>

    );
}

export default BookPage;
