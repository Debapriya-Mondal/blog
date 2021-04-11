import React from "react";
import Form from "./Form";
import { register } from "../services/userService";
class Signup extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: "",
    success: "",
  };
  doSubmit = async () => {
    if (this.state.data.password.length < 8) {
      this.setState({ errors: "Password must be minimum 8 character long" });
      return;
    }
    try {
      await register(this.state.data);
      this.setState({ errors: "" });
      this.setState({ success: "User registration sucessful" });
      this.setState({ data: { name: "", email: "", password: "" } });
    } catch (error) {
      if (error.response && error.response.status === 400)
        this.setState({ errors: error.response.data });
      else if (error.response && error.response.status === 403)
        this.setState({ errors: error.response.data });
    }
  };
  render() {
    const { name, email, password } = this.state.data;
    return (
      <div className="row">
        <div className="col-3"></div>
        <div
          className="col-6 bg-secondary text-white mt-5 p-5"
          style={{ borderRadius: "10px" }}
        >
          {this.state.errors && (
            <div className="alert alert-danger mt-2" role="alert">
              {this.state.errors}
            </div>
          )}
          {this.state.success && (
            <div className="alert alert-success mt-2" role="alert">
              {this.state.success}
            </div>
          )}
          <h2>Register</h2>
          <form onSubmit={this.handelSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                onChange={this.handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={this.handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                placeholder="Password"
                onChange={this.handelChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
