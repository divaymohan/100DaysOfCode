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
        <h1>
          <span className="badge badge-dark text-success">movie app</span>
        </h1>
        <Movies />
      </main>

      <Switch>
        <Redirect from="/" to="/movies" />
        <Route path="/movies/:id" component={Movie} />
        <Route path="/movies" component={MoviesTable} />
        <Route path="/customer" component={Customer} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
