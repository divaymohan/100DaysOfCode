import React, { Component } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";

class Table extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return <h1> i am from table</h1>;
  }
}

export default Table;
