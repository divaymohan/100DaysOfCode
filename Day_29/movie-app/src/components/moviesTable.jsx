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

        <TableBody
          items={movies}
          columns={this.state.columns}
          onLike={onLike}
          onDelete={onDelete}
        />
      </table>
    );
  }
}

export default MoviesTable;
