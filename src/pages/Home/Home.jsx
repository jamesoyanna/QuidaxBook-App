import React from 'react';
import MainHero from './../../components/MainHero/MainHero';
import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from './../../components/CardDisplay/CardDisplay';



import { useCartCounter } from '../../contexts/CartContext';
import Card from '../../components/Card/Card';


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
        <div>
            <MainHero />
            <CategoryDisplay />
            {/* <Card /> */}
            <CardDisplay books = {data.books}  />
       
       
        </div>
    );
}
export default Home;
