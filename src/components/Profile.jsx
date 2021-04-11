import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListGroup from "./ListGroup";
import NewPost from "./NewPost";
import MyProfile from "./MyProfile";
import BlogTable from "./BlogTable";
class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="row mt-5">
        <div className="col-2">
          <ListGroup />
        </div>
        <div className="col">
          <Switch>
            <Route path="/profile/post/:id" component={NewPost} />
            <Route path="/profile/my-profile" component={MyProfile} />
            <Route path="/profile/blog-table" component={BlogTable} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Profile;
