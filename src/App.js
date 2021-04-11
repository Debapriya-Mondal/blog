import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import auth from "./services/authService";
import "./App.css";

class APP extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getUser();
    this.setState({ user });
  }
  render() {
    return (
      <div className="App">
        <NavBar user={this.state.user} />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    );
  }
}

export default APP;
