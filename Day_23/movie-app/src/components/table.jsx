import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
class Table extends Component {
  state = {
    movies: getMovies(),
    count: getMovies().length,
    pageSize: 3,
    currentPage: 1,
  };
  handleLikeClick = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.count === 0) return "No movies in the database..!!";
    return (
      <div>
        <p>Number Of Movies in stock {this.state.count}</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stocks</th>
              <th scope="col"></th>
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
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLikeClick(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
  deleteMovie = (id) => {
    console.log("deleting ..", id);

    deleteMovie(id);

    this.setState({ movies: getMovies(), count: getMovies().length });
  };
}

export default Table;
