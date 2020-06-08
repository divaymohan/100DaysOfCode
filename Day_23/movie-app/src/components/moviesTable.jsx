import React, { Component } from "react";
import Like from "./common/like";
class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              onClick={() => this.raiseSort("title")}
              scope="col"
              style={{ cursor: "pointer" }}
            >
              Title
            </th>
            <th
              onClick={() => this.raiseSort("genre.name")}
              scope="col"
              style={{ cursor: "pointer" }}
            >
              Genre
            </th>
            <th
              onClick={() => this.raiseSort("numberInStock")}
              scope="col"
              style={{ cursor: "pointer" }}
            >
              Stocks
            </th>
            <th
              onClick={() => this.raiseSort("dailyRentalRate")}
              scope="col"
              style={{ cursor: "pointer" }}
            >
              Rate
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td> {movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
