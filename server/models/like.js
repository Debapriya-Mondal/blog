const mongoose = require("mongoose");

const Like = mongoose.model(
  "Like",
  new mongoose.Schema({
    authorId: {
      type: String,
      require: true,
    },
    postId: {
      type: String,
      require: true,
    },
  })
);

exports.Like = Like;
