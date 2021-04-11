const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res.status(404).send("User is not registered with this email");

  let validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send("Invalid username or password!");
  const token = user.generateAuthToken();
  return res.send(token);
});

module.exports = router;
