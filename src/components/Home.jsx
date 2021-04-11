import React, { Component } from "react";
import Card from "./Card";
import { getBlog } from "../services/blogService";
class Home extends Component {
  state = {
    blogs: [],
  };
  async componentDidMount() {
    const { data: blogs } = await getBlog();
    this.setState({ blogs });
  }
  render() {
    return (
      <>
        <div className="row">
          {this.state.blogs.map((blog) => {
            return (
              <Card
                key={blog._id}
                title={blog.title}
                body={blog.body.slice(0, 100)}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
