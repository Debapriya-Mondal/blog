const auth = require("../middleware/auth");
const { User, validate } = require("../models/user");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});
router.post("/", async (req, res) => {
  //   const { error } = validate(req.body);
  //   if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("User alredy exists");
  if (req.body.password.length < 8)
    return res.status(403).send("Password must be 8 character long");
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(user);
});

module.exports = router;
