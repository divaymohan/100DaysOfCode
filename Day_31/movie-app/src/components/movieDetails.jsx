import React, { Component } from "react";

class Movie extends Component {
  state = {};
  clickHandle = () => {
    this.props.history.replace("/movies");
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1> Movie with id :{match.params.id} </h1>
        <button onClick={this.clickHandle} className="btn btn-primary m-4">
          save
        </button>
      </div>
    );
  }
}

export default Movie;
