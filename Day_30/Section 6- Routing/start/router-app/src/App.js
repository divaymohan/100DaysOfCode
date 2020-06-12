import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route } from "react-router-dom";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        Home
        <NavBar />
        <Route path={"/"} component={Home} />
        <Route path={"/Products"} component={Products} />
        <Route path={"/Posts"} component={Posts} />
        <Route path={"/admin"} component={Dashboard} />
        <Route path={"/ProductDetails"} component={ProductDetails} />
      </div>
    );
  }
}

export default App;
