import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import Customer from "./components/customer";
import Movie from "./components/movieDetails";
import About from "./components/about";
import NotFound from "./components/notFound";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" component={Movie} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/customer" component={Customer} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" to="/movies" exact></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
