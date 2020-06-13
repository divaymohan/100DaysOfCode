import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.account);
    console.log("submitted");
  };
  hanleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container py-5">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="col-md-6">
          <div className="form-group ">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              onChange={this.hanleChange}
              id="username"
              value={account.userName}
              type="text"
              className="form-control autoFocus"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              onChange={this.hanleChange}
              value={account.password}
              type="text"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
