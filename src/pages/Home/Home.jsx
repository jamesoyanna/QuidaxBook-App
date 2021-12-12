import React, {useEffect, useState} from 'react';
import MainHero from './../../components/MainHero/MainHero';
import CategoryDisplay from '../../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from './../../components/CardDisplay/CardDisplay';
import {useQuery } from "@apollo/client";

import CartPage from "../../pages/CartPage/CartPage";
import Backdrop from '../../components/Backdrop/Backdrop';

import { BOOK_QUERY } from '../../graphQL/queries';

const Home = () => {
 const [products, setProducts] = useState([]); // Initialize product list as empty array
 
  const [cart, setCart] = useState([]); // Initialize cart as empty array
  const [sideToggle, setSideToggle] = useState(false);

  const { data,error, loading } = useQuery(BOOK_QUERY);

  useEffect(() => {
    if (data) {
      //If requested data exists,
      setProducts(data.books); // Set products
    }
  }, [data]);

  const addToCart = (chosenItem ) => {
    // This function checks, first, if a particular item already exists in a cart,
    const productToIncrement = [...cart].find(({ id }) => id === chosenItem.id);

    if (productToIncrement) {
      // If it does,
      // Then it passes it to another function to increment the amount of that item
      incrementItemAmount(chosenItem);
    } else {
      //If not, it'll add that item to the array of items in the cart
      setCart([...cart, { ...chosenItem, amount: 1 }]);
    }
     setSideToggle(true);
  };

  const incrementItemAmount = (chosenItem) => {
    // This function increases the amount of the selected existing item in the cart
    setCart(
      cart.map((item) =>
        item.id === chosenItem.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decrementItemAmount = (chosenItem) => {
    // This function decreases the amount of the selected existing item in the cart

    if (chosenItem.amount > 1) {
      // If the amount selected is more than 1, then reduce the amount by 1
      setCart(
        cart.map((item) =>
          item.id === chosenItem.id
            ? { ...item, amount: item.amount - 1 }
            : item
        )
      );
    } else {
      // Else, if the amount is only one, then pass the item to another function to remove the item from the cart
      removeFromCart(chosenItem);
    }
  };

  const removeFromCart = (chosenItem) => {
    // This function is to remove the selected item from the cart list
    setCart([...cart].filter(({ id }) => id !== chosenItem.id));
  };

  const getSubTotal = () => {
    // This function calculates the subtotal of all items in the cart by returning the sum total
    // of the multiplication of the price and amount of each cart-item
    return cart.reduce((sum, { price, amount }) => sum + price * amount, 0);
  };

  useEffect(() => {
    // Anytime the product list is updated due to the change in selectedCurrency,
    const cartWithUpdatedPrices = cart.map((eachItem) => {
      // update each cart-item's details with its respective values (id, image_url, title, price) in the updated product list
      const itemInProductList = [...products].find(
        ({ id }) => id === eachItem.id
      );
      return { ...eachItem, ...itemInProductList };
    });
    setCart(cartWithUpdatedPrices); // Then update the cart accordingly
  }, [products]);


    if(loading) return <div style={{color: "lightgreen", fontSize: "18px"}}>Loading...</div>
    if(error) return <div style={{color: "red"}}>An Error occured</div>

    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay books = {data.books} addToCart={addToCart}/>
        <CartPage
        removeFromCart={removeFromCart}
        incrementItemAmount={incrementItemAmount}
        decrementItemAmount={decrementItemAmount}
        getSubTotal={getSubTotal}
        cart={cart}
        show={sideToggle}
        click={() => setSideToggle(false)}
      />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        </div>
    );
}
export default Home;
