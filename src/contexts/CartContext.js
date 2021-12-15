import { useState, createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import { BOOK_QUERY } from "../graphQL/queries";

// Creating context
export const CartContext = createContext();

// Creating a custom hook to use throught-out our application
export const useCartCounter = () => useContext(CartContext)

const CartContextProvider = (props) => {
     const { data, error, loading } = useQuery(BOOK_QUERY);
  const [cart, setCart] = useState([]); // Initialize cart as empty array



 // const [products, setProducts] = useState([]); // Initialize product list as empty array
   const [cartCounter, setCartCounter] = useState(0);
 
  
     const increaseCartCounter = () => {
       setCartCounter(cartCounter + 1);
     };

     const decreaseCartCounter = () => {
       setCartCounter(cartCounter - 1);
     };

     
     


    // useEffect(() => {
    //   if (data) {
      
    //   }
    // }, [data]);




  // Toggle and display cart page
  //const [sideToggle, setSideToggle] = useState(false);

  const addToCart = (chosenItem) => {
   
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
     setCartCounter(cartCounter + 1);
    
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
  



  const value = {
    addToCart,
    incrementItemAmount,
    decrementItemAmount,
    removeFromCart,
    getSubTotal,
    cart,
    data,
    error,
    loading,
    increaseCartCounter,
    decreaseCartCounter,
    cartCounter,
    
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    
  );
};

export default CartContextProvider;