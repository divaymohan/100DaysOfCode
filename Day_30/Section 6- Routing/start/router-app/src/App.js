import React, { Component } from "react";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path={"/Products/:id"} component={ProductDetails} />
          <Route
            path={"/Products"}
            render={(props) => <Products sortBy={"newest"} {...props} />}
          />
          <Route path={"/Posts/:year?/:month?"} component={Posts} />
          <Route path={"/admin"} component={Dashboard} />
          <Route path={"/ProductDetails"} component={ProductDetails} />
          <Route path={"/"} component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
