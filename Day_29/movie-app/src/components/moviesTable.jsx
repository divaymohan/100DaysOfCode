import React, { Component } from "react";
import Like from "./common/like";
import TableBody from "./common/Table/tableBody";
import TableHeader from "./common/Table/tableHeader";
import Table from "./common/Table/table";

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
    const { columns } = this.state;
    return (
      <Table
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
        items={movies}
        onLike={onLike}
        onDelete={onDelete}
      />
    );
  }
}

export default MoviesTable;
