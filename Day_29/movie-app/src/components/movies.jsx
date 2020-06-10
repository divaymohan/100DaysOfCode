import React, { Component } from "react";
import { getMovies, getMovie, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import FilterList from "./filter";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    count: getMovies().length,
    genres: getGenres(),
    selectedGenre: null,
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
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
  handleClickOnGenre = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  deleteMovie = (id) => {
    console.log("deleting ..", id);

    deleteMovie(id);

    this.setState({ movies: getMovies(), count: getMovies().length });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      selectedGenre,
      count,
      movies,
      currentPage,
      pageSize,
      genres,
      sortColumn,
    } = this.state;
    if (count === 0) return "No movies in the database..!!";
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const moviesPaged = paginate(sorted, currentPage, pageSize);
    return (
      <div>
        <div className="row">
          <div className="col-2 m-4">
            <FilterList
              selectedGenre={selectedGenre}
              genres={genres}
              clickOnGenre={this.handleClickOnGenre}
            />
          </div>
          <div className="col">
            <h4>
              Number Of Movies in stock{" "}
              <span className="badge badge-success text-dark">
                {filtered.length}
              </span>
            </h4>
            <MoviesTable
              movies={moviesPaged}
              onLike={this.handleLikeClick}
              onDelete={this.deleteMovie}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />

            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
