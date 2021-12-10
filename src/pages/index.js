import { useQuery } from "@apollo/client";

import { useEffect, useState } from "react";
import Cart from "../components/cart";
import ProductListItem from "../components/productListItem";
import { FETCH_PRODUCTS_AND_CURRENCIES } from "../graphQL/queries";

function Index() {
  const [products, setProducts] = useState([]); // Initialize product list as empty array
  const [currencies, setCurrencies] = useState([]); // Initialize currencies as empty array
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Initialize selected currency as USD
  const [cart, setCart] = useState([]); // Initialize cart as empty array
  const { isOpen, onOpen, onClose } = useDisclosure(); // Initialize open and close states of Cart drawer

  const { data, loading } = useQuery(FETCH_PRODUCTS_AND_CURRENCIES, {
    variables: { currency: selectedCurrency }, // Fetch products and currencies once the page mounts
  });

  useEffect(() => {
    if (data) {
      //If requested data exists,
      setProducts(data.products); // Set products
      setCurrencies(data.currency); // and set currency into state
    }
  }, [data]);

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

  return (
    <Box bgColor="#e2e6e3" minH="100vh">
      <Flex bg="white" w="full" py={16}>
        <Container maxW="5xl">
          <Stack color="black" spacing={5}>
            <Heading>All Products</Heading>
            <Text fontSize="lg">A 360° look at Lumin</Text>
          </Stack>
        </Container>
      </Flex>
      <Flex w="full" py={12}>
        <Container maxW="5xl">
          <SimpleGrid
            w="full"
            columns={[2, 2, 3]}
            // Chakra UI responsive queries
            // [2, 2, 3] means 2 columns if max-width: 576px,
            // 2 columns if max-width: 768px, and
            // 3 columns if max-width > 768px
            spacingX={10}
            spacingY={12}
          >
            {products.map((product) => (
              // Map each product to display a product item
              <ProductListItem
                product={product}
                key={product.id}
                loading={loading}
                onOpen={onOpen}
                selectedCurrency={selectedCurrency}
                addToCart={addToCart}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Flex>
      {/* Cart Component */}
      <Cart
        isOpen={isOpen}
        onClose={onClose}
        loading={loading}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        currencies={currencies}
        cart={cart}
        removeFromCart={removeFromCart}
        incrementItemAmount={incrementItemAmount}
        decrementItemAmount={decrementItemAmount}
        getSubTotal={getSubTotal}
      />
    </Box>
  );
}

export default Index;
