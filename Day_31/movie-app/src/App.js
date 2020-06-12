import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesTable from "./components/moviesTable";
import Customer from "./components/customer";
import Movie from "./components/movie";
import About from "./components/about";
import NotFound from "./components/notFound";
import Movies from "./components/movies";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={Movie} />

          <Route path="/customer" component={Customer} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />

          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </div>
  );
}

export default App;
