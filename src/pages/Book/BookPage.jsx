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
  publisher
  release_date
  number_of_purchases
  likes
  rating
  price
  image_url
  available_copies
  full_description
  genres{
    name
  }
 

  
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
    <div className="container">
    <section className="book-page-header">
     
      <div className="section-center">
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
            <h4 className="author">{data.book.publisher}</h4>
            <p className="author">{moment.utc(data.book.release_date).format(" YYYY ")}</p>

            <div className="item-header">
              <div style={{columns: 8, paddingTop: "35px"}}>
            <h5 className="item-list">person</h5>
            <h5 className="item-list">{data.book.likes}</h5>
           
               <p className="item-list">Ratings {data.book.rating}</p>
               <div><Rating rating={data.book.rating} /></div>
            <span className="item-list">Genre
            {data.book.genres.map((genre) =>(
              <span key={genre.id} >{genre.name}, </span>
            ))}
            </span>
             <h5 className="item-list">Tags <span>{data.book.tags}</span></h5>
            <h5 className="item-list">Publisher</h5> 
              <div> {data.book.publisher}</div>
            <h5 className="item-list">Released</h5>
            <span>{moment.utc(data.book.release_date).format('MMMM Do YYYY')}</span>
             </div>
             </div>
                   <span className="single-product-price">${data.book.price}</span>
            <p className="single-product-desc">
               {data.book.full_description}
            </p>
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
