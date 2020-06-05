import React, { Component } from "react";
class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Counters
          <span className="badge badge-pill badge-secondary">
            {this.props.numberOfCounter}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
