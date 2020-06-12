import React, { Component } from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h1>
          <span className="badge badge-dark text-success">movie app</span>
        </h1>

        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink class="nav-link" to="/">
                Movies
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/customer">
                Customer
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
