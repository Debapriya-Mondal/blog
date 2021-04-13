const mongoose = require("mongoose");

const Joi = require("joi");
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
    author: {
      name: { type: String },
      id: { type: String },
    },
    like: [{ type: String }],
    date: {
      type: Date,
      default: Date.now(),
    },
  })
);
function validateBlog(blog) {
  const schema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
  });
  return schema.validate(blog);
}

exports.Blog = Blog;
exports.validate = validateBlog;
