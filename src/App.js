import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./components/Category/Category";
import BookPage from "./pages/BookPage/BookPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchBox from "./components/Search/SearchBox";

import CartContextProvider from "./contexts/CartContext";

const client = new ApolloClient({
  uri: "https://quidax-feec-graphql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <div className="App">
        <ApolloProvider client={client}>
          <CartContextProvider>
            <BrowserRouter>
              <NavBar />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products/:id" component={Category} />
                <Route path="/product/:id" component={BookPage} />
                <Route exact path="/" render={() => <Redirect to="/new/1" />} />
                <Route exact path="/search" component={SearchBox} />
              </Switch>
            </BrowserRouter>
          </CartContextProvider>
        </ApolloProvider>
      </div>
    </>
  );
}
export default App;
