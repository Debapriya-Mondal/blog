const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const { Blog } = require("./blog");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.name, email: this.email },
    "jwtPrivateKey"
  );
  return token;
};
const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    fullName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  };
  return Joi.validate(user, schema);
}
exports.userSchema = userSchema;
exports.User = User;
exports.validate = validateUser;
