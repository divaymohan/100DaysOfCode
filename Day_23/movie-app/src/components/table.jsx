import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";

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
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td> {movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  deleteMovie = (id) => {
    console.log("deleting ..", id);

    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };
}

export default Table;
