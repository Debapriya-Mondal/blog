import React from "react";

const Like = ({ liked }) => {
  let classes = "fa fa-heart";
  let styles = { cursor: "pointer" };
  if (!liked) {
    classes += "-o";
    styles.color = "";
  }
  return <i className={classes} style={styles} aria-hidden="true"></i>;
};

export default Like;
