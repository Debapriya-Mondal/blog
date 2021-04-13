import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBlogByUserId, deleteBlog } from "../services/blogService";
import { getUser } from "../services/authService";
class BlogTable extends Component {
  state = { data: [] };
  async componentDidMount() {
    const user = getUser();
    const { data } = await getBlogByUserId(user._id);
    this.setState({ data });
  }
  handelDelete = async (id) => {
    console.log(id);
    const originalBlogs = this.state.data;
    const blogs = originalBlogs.filter((m) => m._id !== id);
    this.setState({ data: blogs });
    await deleteBlog(id);
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{new Date(blog.date).toLocaleDateString("en-US")}</td>
              <td>
                {
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handelDelete(blog._id)}
                  >
                    Delete
                  </button>
                }
              </td>
              <td>
                {
                  <Link
                    to={`/profile/post/${blog._id}`}
                    className="btn btn-warning"
                  >
                    Update
                  </Link>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BlogTable;
