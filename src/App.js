import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import BookPage from "./pages/Book/BookPage";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SearchBox from "./components/Search/SearchBox";
import CartPage from "./pages/CartPage/CartPage";
import Backdrop from './components/Backdrop/Backdrop';

const client = new ApolloClient({
  uri: "https://quidax-feec-graphql.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {

  const [sideToggle, setSideToggle] = useState(false);
  return (
    <>
      <div className="App">
        <ApolloProvider client={client}>
          <BrowserRouter>
            <NavBar click={() => setSideToggle(true)} />
            <CartPage show={sideToggle} click={() => setSideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products/:id" component={CategoryPage} />
              <Route path="/product/:id" component={BookPage} />
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route exact path="/search" component={SearchBox} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </div>
    </>
  );
}

export default App;
