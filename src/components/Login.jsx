import React from "react";
import Form from "./Form";
import auth from "../services/authService";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: "",
  };
  doSubmit = async () => {
    try {
      await auth.login(this.state.data);
      window.location = "/";
    } catch (err) {
      if (err.response && err.response.status === 404)
        this.setState({ errors: err.response.data });
      else if (err.response && err.response.status === 400)
        this.setState({ errors: err.response.data });
    }
  };
  render() {
    const { email, password } = this.state.data;
    return (
      <div className="row">
        <div className="col-3"></div>
        <div
          className="col-6 bg-secondary text-white mt-5 p-4"
          style={{ borderRadius: "10px" }}
        >
          {this.state.errors && (
            <div className="alert alert-danger mt-2" role="alert">
              {this.state.errors}
            </div>
          )}
          <h2>Login</h2>
          <form onSubmit={this.handelSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handelChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={this.handelChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
