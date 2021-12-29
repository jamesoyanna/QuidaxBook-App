import React from 'react';
import "./bookPage.css";
import {useParams } from "react-router-dom";
import {useQuery, gql } from '@apollo/client';
import Rating from './../../components/Rating';
import moment from 'moment';

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
  available_copies
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

    // Implement date
    //let isoDate = data.book.release_date ;
    //let newDate =  moment.utc(data.book.release_date).format('MM/DD/YY');

  

     if(loading) return <div>Loading...</div>
     if(error) return <div>An error occured</div>

    return (

      <>
    <div className="container">
    <section className="book-page-header">
     
      <div className="section-center">
         <h4 className="header-text" style={{textAlign: 'left', marginBottom: "30px"}}> Single book Display</h4>
      </div>
    </section>     
       <section className="single-product section">

      
      <div className="section-center single-product-center">
        <section className="image-section">
        <img
          src={data.book.image_url}
          className="single-product-img img"
          alt=""
        />  
            <br />
            <span
                  className={
                    data.book.available_copies > 0
                      ? "w-full text-green text-sm md:text-sm font-light mb-1 md:mb-2"
                      : "outofstock"
                  }
                >
                  <span className="available-copies">
                     {data.book.available_copies > 0 ? `${data.book.available_copies} Copies Available`: "Out of Stock"}
                  </span>
                   </span>
        </section>
        <article className="single-product-info">
          
          <div>
              <h2 className="single-product-title">{data.book.title}</h2>
            <h3 className="author">Author</h3>

            <div className="item-header">
              <div style={{columns: 8, paddingTop: "35px"}}>
            <h5 className="item-list">person</h5>
            <h5 className="item-list">{data.book.likes}</h5>
           
               <p className="item-list">Ratings {data.book.rating}</p>
               <div><Rating rating={data.book.rating} /></div>
            <h5 className="item-list">Genre</h5>
            
             <h5 className="item-list">Tags <span>{data.book.tags}</span></h5>
            <h5 className="item-list">Publisher</h5> 
              <div> {data.book.publisher}</div>
            <h5 className="item-list">Released</h5>
            <span>{moment.utc(data.book.release_date).format('MMMM Do YYYY')}</span>
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
    </div>


</>

    );
}

export default BookPage;
