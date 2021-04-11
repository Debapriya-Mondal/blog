const mongoose = require("mongoose");
const Joi = require("joi");
const { userSchema } = require("./user");

const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
    authorId: {
      type: String,
      require: true,
    },
    like: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  })
);
function validateBlog(blog) {
  const schema = {
    title: Joi.string().required(),
    category: Joi.string().required(),
    author: Joi.string().required(),
    body: Joi.string().required(),
  };
  return Joi.validate(blog, schema);
}

exports.Blog = Blog;
exports.validate = validateBlog;
