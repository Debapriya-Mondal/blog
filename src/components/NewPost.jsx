import React from "react";
import { postBlog, getBlogById, putBlog } from "../services/blogService";
import Form from "./Form";
import { getUser } from "../services/authService";

class NewPost extends Form {
  state = {
    data: {
      title: "",
      author: { name: "", id: "" },
      body: "",
    },
    errors: "",
  };
  async componentDidMount() {
    const blogId = this.props.match.params.id;
    if (blogId === "new") return;
    const { data: blog } = await getBlogById(blogId);
    if (!blog) return this.props.history.replace("/");
    this.setState({
      data: {
        title: blog.title,
        body: blog.body,
        author: { name: blog.author.name, id: blog.author._id },
      },
    });
  }
  doSubmit = async () => {
    const user = getUser();
    const data = { ...this.state.data };
    data.author["id"] = user._id;
    data.author["name"] = user.name;
    const blogId = this.props.match.params.id;
    try {
      if (blogId === "new") {
        await postBlog(data);
        alert("Blog post sucessfull");
      } else {
        await putBlog(blogId, data);
        alert("Blog update sucessfull");
      }

      this.props.history.push("/profile/blog-table");
    } catch (error) {
      if (error.response && error.response.status === 400)
        alert(error.response);
    }
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handelSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              value={this.state.data.title}
              onChange={this.handelChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Write Blog</label>
            <textarea
              name="body"
              onChange={this.handelChange}
              rows="10"
              className="form-control"
              value={this.state.data.body}
              style={{ resize: "none" }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default NewPost;
