import React from "react";
import { Link } from "react-router-dom";

const ListGroup = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Link className="nav-link" to="/profile/my-profile">
          Profile
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="nav-link" to="/profile/post/new">
          New Post
        </Link>
      </li>
      <li className="list-group-item">
        <Link className="nav-link" to="/profile/blog-table">
          Blogs
        </Link>
      </li>
    </ul>
  );
};

export default ListGroup;
