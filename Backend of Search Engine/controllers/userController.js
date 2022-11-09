const { User, validate } = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const userList = asyncHandler(async (req, res) => {
  const { query } = req.params;
  const users = await (query
    ? User.find({ username: { $regex: ".*" + query + ".*" } })
    : User.find({}));
  res.send(users);
});

const createUser = asyncHandler(async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    res.status(404);
    throw new Error(error.details[0].message);
  }
  const newUser = new User({
    username: req.body.username,
  });

  await newUser.save();
  res.status(201).send(newUser);
});

module.exports = {
  userList,
  createUser,
};
