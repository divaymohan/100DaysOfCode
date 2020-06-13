import React, { Component } from "react";

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
