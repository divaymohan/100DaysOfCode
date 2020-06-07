import React, { Component } from "react";

class FilterList extends Component {
  state = {};
  render() {
    const { genres, clickOnGenre } = this.props;
    return (
      <ul className="list-group">
        <li className="list-group-item active">All Geners</li>
        {genres.map((genere) => (
          <li onClick={() => clickOnGenre(genere)} className="list-group-item">
            {genere.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default FilterList;
