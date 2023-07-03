const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

const userRoutes = async (req, res) => {
  console.log("red>>>>>>>>>>", req.body);
  try {
    console.log("hello", req.body);
    await new User({ ...req.body }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal Server Error", statusCode: "500" });
  }
};

module.exports = userRoutes;
