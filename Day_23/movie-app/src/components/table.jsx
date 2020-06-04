import React, { Component } from "react";
import { getMovies, getMovie } from "../services/fakeMovieService";

class Table extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stocks</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr>
                <td>{movie.title}</td>
                <td> {movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <button className="btn btn-primary"> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
