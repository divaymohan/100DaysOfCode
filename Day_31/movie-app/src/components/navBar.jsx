import React, { Component } from "react";
import { Link, Route, Switch, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="#">
          Movies App
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink class="nav-link" to="/">
                Movies <span class="sr-only">(current)</span>
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
