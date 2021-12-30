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
       
            {data.books.map((image, i) => (
               <Link key={i} to={`/product/${image.id}`}>
              {/* <div className='container'> */}
                {/* ////////////// */}
                  
                <div className="carousel-cell shadow-lg relative">
                <span  className="open-carousel-overlay bg-white cell-button w-6 h-6  rounded-full">
                <span className="w-full h-full flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 fill-current text-gray-light">
                <path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                </svg>
                </span>
                </span>

                 <div className="absolute carousel-overlay shadow-inner-lg">   
                 </div>
                  <div className="absolute book-details w-full h-full">
                    <span  className="close-carousel-overlay cell-button w-6 h-6">
                        <span className="w-full h-full flex">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4 fill-current text-white-dull ">
                           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                          </svg>
                        </span>
                    </span>
                     <span class="w-full text-green text-sm md:text-sm font-light mb-1 md:mb-2">Available</span>
                                <span className="w-full text-white text-sm font-bold light mb-1 md:mb-2 md:text-md truncate mb:no-truncate">Big Magic</span>
                                <span className="w-full text-white text-xs md:text-xs font-light truncate mb:no-truncate">Elizabeth Gilbert</span>
                                <span className="w-full text-white text-xs md:text-xs font-light mb-1">2014</span>
                                <span className="w-full text-white text-xs md:text-xs font-light hidden md:block"><strong className="font-bold">Genre: </strong>Motivational</span>
                                <span className="w-full text-white text-xs md:text-xs font-light mb-1 hidden md:block"><strong className="font-bold">Labels: </strong>Creative, Self-help</span>
                                 <span className="w-full rating">
                                    <span className="rating-section">
                                       <span className="w-full text-white text-xs md:text-xs font-light mb-1"><span className="md:font-bold">Rating: </span>4.0</span>
                                        <span className="w-full">
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current text-yellow ">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                            </svg> 
                                        </span>
                                    </span>
                                      <span className="rating-divider hidden md:block"></span>
                                    <span className="rating-section">
                                       <span className="w-full">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-3 h-3 md:w-4 md:h-4 fill-current text-white-dull">
                                                <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"/>
                                            </svg>
                                       </span>
                                        <span className="full">
                                            <span className="w-full text-white text-xs font-light mr-1">44</span>
                                            <span className="w-full text-white text-xs font-light ">20</span>
                                        </span>
                                    </span>
                                 </span>            
                  </div>
                   <img className="carousel-images" src={image.image_url}  alt="book images" />
              </div>
           
            
              {/* </div> */}
               </Link>
            ))}
            
          </Flickity>
         
        </>
    );
}

export default CategoryDisplay;
