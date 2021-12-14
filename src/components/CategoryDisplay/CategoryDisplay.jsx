import React from 'react';
import "./CategoryDisplay.css";
import Flickity from "react-flickity-component";
import { useCartCounter } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
const flickityOptions = {
    initialIndex: 2
}
const CategoryDisplay = () => {
   const { loading, error, data  } = useCartCounter();

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
               <Link to={`/product/${image.id}`}>
              <div className='container'key={image.id}>
                <img src={image.image_url} alt="book images" />
              </div>
               </Link>
            ))}
            
          </Flickity>
         
        </>
    );
}

export default CategoryDisplay;
