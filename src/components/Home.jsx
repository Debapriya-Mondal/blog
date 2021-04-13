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
                id={blog._id}
                author={blog.author.name}
                title={blog.title}
                body={blog.body.slice(0, 100)}
                date={blog.date}
                like={blog.like}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
