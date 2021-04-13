import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { likeBlog } from "../services/blogService";
import { getUser } from "../services/authService";
const Like = ({ id, like }) => {
  const user = getUser();

  const [Status, setStaus] = useState(
    user ? like.indexOf(user._id) !== -1 : false
  );

  const [Count, setCount] = useState(like.length);
  const history = useHistory();
  const handelLike = async (id) => {
    if (localStorage.getItem("token")) {
      setStaus(!Status);
      if (!Status) {
        setCount(Count + 1);
      } else {
        setCount(Count - 1);
      }
      await likeBlog(id, user._id);
    } else {
      history.push("/login");
    }
  };
  let classes = "fa fa-heart";
  let styles = { cursor: "pointer" };
  if (!Status) {
    classes += "-o";
    styles.color = "";
  }
  return (
    <i
      onClick={() => handelLike(id)}
      className={classes}
      style={styles}
      aria-hidden="true"
    >
      <span className="ml-2">{Count}</span>
    </i>
  );
};

export default Like;
