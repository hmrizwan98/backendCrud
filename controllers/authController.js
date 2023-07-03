const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const userData = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
    });

    const savedUser = await userData.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({ message: "Token is not valid" });
  }
}

const login = async (req, res) => {
  try {
    const token = jwt.sign(
      { email: req.body.email },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: "3d",
      },
      (err, token) => {
        res.json({
          token,
        });
      }
    );
    const userExist = await User.findOne({ email: req.body.email });
    if (!userExist) {
      res.send("User not Found");
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userExist.password
      );
      if (passwordMatch) {
        res.send({
          message: "Login Successfully",
          token,
        });
      } else {
        res.send("Password does not match ");
      }
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { signUp, login };
