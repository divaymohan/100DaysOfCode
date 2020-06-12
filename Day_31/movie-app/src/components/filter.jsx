import React, { Component } from "react";

class FilterList extends Component {
  state = {};
  render() {
    const { genres, clickOnGenre, selectedGenre } = this.props;
    return (
      <ul className="list-group">
        {genres.map((genere) => (
          <li
            key={genere._id}
            onClick={() => clickOnGenre(genere)}
            className={
              genere === selectedGenre
                ? "list-group-item active"
                : "list-group-item"
            }
            style={{ cursor: "pointer" }}
          >
            {genere.name}
          </li>
        ))}
      </ul>
    );
  }
}
/*
FilterList.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id' 
}
*/
export default FilterList;
