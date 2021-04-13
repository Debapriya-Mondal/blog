const { Blog, validate } = require("../models/blog");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort("date");
  res.send(blogs);
});
router.post("/", auth, async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error);
  let blog = new Blog({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });
  blog = await blog.save();
  res.send(blog);
});
router.put("/:id", auth, async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body,
  });
  if (!blog) return res.status(404).send("Blog with the id not found");
  return res.send(blog);
});
router.put("/like/:blogId", async (req, res) => {
  const blog = await Blog.find({ _id: req.params.blogId });
  if (!blog) {
    return res.status(404).send("Blog with the id not found");
  } else {
    if (blog[0].like.indexOf(req.body.authorId) == -1) {
      blog[0].like.push(req.body.authorId);
    } else {
      blog[0].like.pull(req.body.authorId);
    }
  }
  await Blog.updateOne(
    { _id: req.params.blogId },
    { $set: { like: blog[0].like } }
  );
});

router.delete("/:id", auth, async (req, res) => {
  const blog = await Blog.findOneAndRemove(req.params.id);
  if (!blog) return res.status(404).send("Blog not found");
  res.send(blog);
});
router.get("/:blogid", async (req, res) => {
  const blog = await Blog.findById(req.params.blogid);
  if (!blog) return res.status(404).send("Blog with the given id not found");
  res.send(blog);
});

router.get("/blog/:userid", auth, async (req, res) => {
  const blog = await Blog.find({ "author.id": req.params.userid });
  if (!blog)
    return res.status(404).send("Blog with the given user id not found");
  res.send(blog);
});
module.exports = router;
