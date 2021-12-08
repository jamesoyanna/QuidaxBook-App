import React from 'react';
import {useQuery, gql } from "@apollo/client";
import "./CategoryDisplay.css";
//import Carousel from '../Slider/Slider';
import Flickity from "react-flickity-component";


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

const flickityOptions = {
    initialIndex: 2
}
const CategoryDisplay = () => {
   const {loading, error, data } = useQuery(BOOK_QUERY);

     if(loading) return <div>Loading...</div>
     if(error) return <div>An error occured</div>
    
    return (
      <>
          <Flickity
          className={'carousel'} 
      elementType={'div'} 
      options={flickityOptions} 
      disableImagesLoaded={false} 
      reloadOnUpdate 
      static
          >
            {data.books.map((image, index) => (
              <div className='container'key={index}>
                <img src={image.image_url} alt="book images" />
              </div>
            ))}
          </Flickity>
        </>
    );
}

export default CategoryDisplay;
