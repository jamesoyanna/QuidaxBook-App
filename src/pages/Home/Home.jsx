import React from 'react';
import MainHero from '../../components/Hero/Hero';
import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from './../../components/CardDisplay/CardDisplay';
import { useCartCounter } from '../../contexts/CartContext';

const Home = () => {

  // destructure data from context
  const {  
    loading,
    data,
    error
 
   } = useCartCounter();

    if(loading) return <div style={{color: "lightgreen", fontSize: "18px"}}>Loading...</div>
    if(error) return <div style={{color: "red"}}>An Error occured</div>
    return (
        <>
            <MainHero />
            <CategoryDisplay books = {data.books}  />
            {/* <Card /> */}
            <CardDisplay books = {data.books}  />
       
       
        </>
    );
}
export default Home;
