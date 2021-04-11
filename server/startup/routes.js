const express = routes("express");
const user = require("../routes/user");
const blog = require("../routes/blog");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/user", user);
  app.use("/api/blog", blog);
  app.use("/api/login", auth);
};
