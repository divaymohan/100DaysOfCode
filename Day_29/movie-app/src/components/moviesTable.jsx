import React, { Component } from "react";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  state = {
    columns: [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stocks" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        ),
      },
      {
        key: "Delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ],
  };

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.state.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />
        {/* <thead>
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
        </thead> */}
        <TableBody
          items={movies}
          columns={this.state.columns}
          onLike={onLike}
          onDelete={onDelete}
        />
        {/* <tbody>
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
        </tbody> */}
      </table>
    );
  }
}

export default MoviesTable;
