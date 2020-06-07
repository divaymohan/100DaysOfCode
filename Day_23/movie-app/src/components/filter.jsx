import React, { Component } from "react";

class FilterList extends Component {
  state = {};
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">All Geners</li>
        <li className="list-group-item">Horror</li>
        <li className="list-group-item">Romentic</li>
        <li className="list-group-item">Thriller</li>
      </ul>
    );
  }
}

export default FilterList;
