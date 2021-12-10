import React from 'react';
import MainHero from './../../components/MainHero/MainHero';
import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from './../../components/CardDisplay/CardDisplay';
import {useQuery, gql } from "@apollo/client";

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
     available_copies
  }
}
`

const Home = () => {
    const {loading, error, data } = useQuery(BOOK_QUERY);
    

    if(loading) return <div style={{color: "lightgreen", fontSize: "18px"}}>Loading...</div>
    if(error) return <div style={{color: "red"}}>An Error occured</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay books = {data.books} />
        </div>
    );
}

export default Home;
